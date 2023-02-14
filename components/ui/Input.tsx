interface Props{
    placeholder ?: string,
    onChange ?: (value: any) => void
    className?: string,
    value ?: string,
    name ?:string

}
const Input = ({placeholder, onChange, className, value, name} : Props) => {
    return(
        <input className={`${className} outline-none px-10 py-3 border border-primary-gray/20 rounded-md`} name={name} value={value} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input