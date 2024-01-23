
const Button = ({label, className, onClick, disabled}
  :
  {
    label:string,
    className?: string,
    onClick?:React.MouseEventHandler,
    disabled?: boolean
  }) => {
  return (
    <button
      className={`flex justify-center items-center rounded-md pb-1 pt-1
                 pr-2 pl-2 bg-primary text-slate-50 hover:bg-opacity-50
                 active:bg-opacity-80 ${className?className:''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;