import {  NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function GET (
    req: Request,
    { params }: { params: { colorsId: string }}
) { 
    try {

       if(!params.colorsId) {
            return new NextResponse("Color id is required", { status: 400});
        }

        

        const color = await prismadb.color.findUnique({
            where: {
                id: params.colorsId,
                
            },
    
        });
        return NextResponse.json(color);

    } catch (error) {
        console.log('[COLORS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });

    }
}

export async function DELETE (
    req: Request,
    { params }: { params: {   storeId: string, colorsId: string }}
) { 
    try {
        const { userId } = auth();


        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

       if(!params.colorsId) {
            return new NextResponse("Color id is required", { status: 400});
        }

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
          });

          if( !storeByUserId ){
            return new NextResponse("Unauthorized", { status: 405 });
          }


        const color = await prismadb.color.deleteMany({
            where: {
                id: params.colorsId,
                
            },
    
        });
        return NextResponse.json(color);

    } catch (error) {
        console.log('[COLORS_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });

    }
}


export async function PATCH (
    req: Request,
    { params }: { params: {  colorsId: string, storeId: string}}
) { 
    try {
        const { userId } = auth();
        const  body = await req.json();

        const { name, value } = body;

        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 });
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        if (!value) {
            return new NextResponse("Value is required", { status: 400 });
        }

        if(!params.colorsId) {
            return new NextResponse("Color id is required", { status: 400});
        }


        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId,
            }
          });

          if( !storeByUserId ){
            return new NextResponse("Unauthorized", { status: 405 });
          }


        const color = await prismadb.color.updateMany({
            where: {
                id: params.colorsId,
                
            },
            data: {
                name,
                value
            }
        });
        return NextResponse.json(color);

    } catch (error) {
        console.log('[COLORS_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });

    }
}
