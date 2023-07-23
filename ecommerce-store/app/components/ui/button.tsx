//  Own button component

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

 const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
   //  The second argument is the ref received from the parent component.
 }, ref) => {
    return(
        <button 
        className={cn(
         `
         w-auto
         rounded-full
         bg-black
         border-transparent
         px-5
         py-3
         disabled: cursor-not-allowed
         disabled:opacity-50
         text-white
         font-semibold
         hover:opacity-75
         transition
         `, className 
         // classname This is a prop passed to the 
         // component from the parent.
        )}
        ref={ref}
        {...props}>
         {children}
         {/* React represent content of the button */}
        </button>
    );
 })

 Button.displayName = "Button";

 export default Button;