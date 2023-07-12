import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";
import prismadb from "@/lib/prismadb";


const Navbar = async () => {
    const { userId } = auth();
    if(!userId) {
        redirect("/sign-in");
    }
const stores = await prismadb.store.findMany({
    where: {
        userId,
    },
});

    return(
        <div className="border-b">
            <div className="flex h-16 items-center px-4 ">
                <StoreSwitcher items={stores} />
                {/* <div>
                    This will be a store switcher
                </div> */}
                
                
                {/* <div>
                    This will be the routes
                </div> */}
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/"/>
                </div>
                </div>
            </div>
        
    );
}

export default Navbar;