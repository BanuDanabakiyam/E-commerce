import prismadb from "@/lib/prismadb";
import ColorForm from "./components/colors-form.tsx";
const ColorPage = async ({
    params
}: {
    params: { colorsId:  string}

}) => {
    const color = await prismadb.color.findUnique({
        where: {
            id: params.colorsId
        }
    });
    return(
        <div className="flex-col">
            <div
             className="flex-1 space-y-4 p-8 pt-6">
                <ColorForm initialData={color}/>
             </div>
        </div>
    );
}

export default ColorPage;