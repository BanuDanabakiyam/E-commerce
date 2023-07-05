"use client";
// Client is user component

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

//import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen){
      onOpen();
    }
  },[isOpen,onOpen]);

  
  return null;

// return (
//     <div className="pt-2 ml-2">
               
//       Root Page

//     </div>
//   )
}

export default SetupPage;

// after signout url navigate to front page

// What is zustand ?
//zustand is one of the smallest state management library.

{/* <UserButton afterSignOutUrl="/"> */}
      {/* <Modal title="Test" description="Test Description" isOpen onClose={() => {}}>
      children
      </Modal> */}

