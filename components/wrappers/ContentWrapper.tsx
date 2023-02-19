interface Props {
    children: any,
    className?: string
}

const ContentWrapper = ({ children, className }: Props) => {
    return (
        <section className={` ${className}   py-32  xl:px-20 min-h-screen w-full flex flex-col gap-10`}>
            {children}
        </section>
    );
}

export default ContentWrapper;