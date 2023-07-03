"use client";
// Client is user component

import { Modal } from "@/components/ui/modal";

//import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
return (
    <div className="pt-2 ml-2">
      {/* <UserButton afterSignOutUrl="/"> */}
      <Modal title="Test" description="Test Description" isOpen onClose={() => {}}>
      children
      </Modal>
    </div>
  )
}

export default SetupPage;

// after signout url navigate to front page

// What is zustand ?
//zustand is one of the smallest state management library.
