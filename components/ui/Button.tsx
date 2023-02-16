interface Props {
    type?: any,
    text?: string,
    className?: string,
    onClick  ?: any,
    onChange ?: () => void,
    disabled ?: boolean
}

const Button = ({type, text, className, onChange, onClick, disabled} : Props) => {
  console.log("disable", disabled)
  return (
    <button
      className={`${className}   py-3 px-10 rounded-sm`}
      type={type}
      onClick={onClick}
      onChange={onChange}
      disabled = {disabled}
    >
      {text}
    </button>
  );
};
export default Button;
