"use client";
import { useEffect, useState } from "react"; // Global import

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if( !isMounted ){
        return null;
    }
    return (
        <>
        <StoreModal />
        </>
    );
}


//  ********************************************
//  what is hydration error
// "undefined" caused the hydration error, which occurs if the server-rendered HTML does not match the client-rendered HTML.
// eg:
// <LinK>
// <a>
//     <Image>
//         ........
//     </Image>
// </a>
// </LinK> 

// In this example, you will get the React Hydration Error if the <a> tag is used inside another <a> tag. because in Link tag alreday has <a> hidden tag.
// we ensure until useEffect lifecycle run something happen in client component to avoid hydration error.
// ***********************************************



