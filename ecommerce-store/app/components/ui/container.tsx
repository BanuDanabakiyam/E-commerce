interface ContainerProps {
    children: React.ReactNode;
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