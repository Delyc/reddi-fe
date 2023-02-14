interface Props {
    children: any
}

const PageWrapper = ({ children }: Props) => {
    return (
        <section className="relative">
            {children}
        </section>
    );
}

export default PageWrapper;