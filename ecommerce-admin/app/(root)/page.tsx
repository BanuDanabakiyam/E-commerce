import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
return (
    <div className="pt-2 ml-2">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default SetupPage;

// after signout url navigate to front page
