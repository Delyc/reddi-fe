interface Props {
    children: any
}

const PageWrapper = ({ children }: Props) => {
    return (
        <section className="px-6 xl:mx-auto xl:max-w-[80rem] flex flex-col items-center ">
            {children}
        </section>
    );
}

export default PageWrapper;