interface Props {
    children: any,
    className?: string
}

const ContentWrapper = ({ children, className }: Props) => {
    return (
        <section className={` ${className} absolute top-20 py-10 left-64 px-20 min-h-screen w-[83.12%] flex flex-col gap-10 bg-background`}>
            {children}
        </section>
    );
}

export default ContentWrapper;