interface Props{
    children ?: any,
    className ?: string
}

export const Heading1 = ({ children, className } : Props) => {
    return (
        <h1 className={` md:font-normal md:text-3xl font-bold text-7.25 md:leading-22 leading-11 -tracking-0.02 ${className}`}>{children}</h1>
    )
}

export const Heading2 = ({ children, className } : Props) => {
    return (
        <h2 className={`font-normal md:text-11.75 md:leading-14.75 leading-9.75 text-6.5 text-white -tracking-0.015 md:-tracking-0.02 ${className}`}>{children}</h2>
    )
}

export const Heading3 = ({ children, className } : Props) => {
    return (
        <h3 className={` md:text-9.5 md:leading-12.25 leading-9 text-5.75 -tracking-0.015 ${className}`}>{children}</h3>
    )
}

export const Heading4 = ({ children, className } : Props) => {
    return (
        <h4 className={`font-normal leading-7.5 md:leading-9.5 text-xl md:text-3xl -tracking-0.015 ${className}`}>{children}</h4>
    )
}

export const Paragraph = ({ children, className } : Props) => {
    return (
        <p className={`font-normal leading-[27px] md:leading-7.5 text-4.5 md:text-6 -tracking-0.015 ${className}`}>{children}</p>
    )
}
