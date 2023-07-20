interface ContainerProps {
    children: React.ReactNode; //representing the content of React component
}
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return(
        <div className="mx-auto max-w-7xl">
            {/* max-w-7xl => extremely large screen */}
            {children}
        </div>
    );
}
export default Container;
// In summary, the Container component is a simple wrapper component in React 
// that centers its content horizontally and sets a maximum width to accommodate 
// extremely large screens. It is designed to wrap other components and provide a
//  consistent layout and styling across the application. 
//  The content to be displayed inside the Container component is passed as the children prop
//   and is rendered within the <div> element created by the Container component.
//   The use of TypeScript interfaces and type annotations ensures type safety for the props passed to the component.




