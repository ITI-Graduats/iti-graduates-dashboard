import { Link } from "react-router-dom";
const Button = ({
  to,
  text,
  type = "button",
  variant = "fill",
  size = "md",
  disabled = false,
  className = "",
  onClick = null,
  showClose = false,   
}) => {
  const baseClasses =
    "btn font-semibold rounded focus:outline-none transition-all duration-200 ease-in-out inline-flex items-center justify-center";
    
  const sizeClasses = {
    xs:"h-1 p-1 text-xs min-w-[40px] leading-normal ",
    sm: "h-2 px-1 text-xs min-w-[40px] leading-normal mr-1",
    md: "h-10 px-4 text-base min-w-[100px] leading-normal",
    lg: "h-12 px-6 text-lg min-w-[120px] leading-normal"
  };

  const variantClasses = {
    fill: `bg-main text-white  hover:text-main 
           focus:ring-main/20 shadow-sm hover:shadow`,
    outline: `border-2 border-main text-main 
               focus:ring-main/20 `
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${className}
  `.trim();
  if (to && !disabled) {
    return (
      <Link to={to} className={buttonClasses}>
        {text}
      </Link>
    );
  }
  return (
    <button 
      type={type} 
      className={buttonClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      <span className="block leading-none">{text}</span>
    </button>
  );
};

export default Button;
