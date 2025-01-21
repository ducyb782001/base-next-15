import { ButtonType } from "@/constants/enum/component.enum";
import useDebouncedClick from "@/hooks/useDebouncedClick";

type ButtonProps = Readonly<{
  className?: string;
  accessoriesLeft?: React.ReactNode;
  accessoriesRight?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  [key: string]: any;
}>;

export default function DebouncedButton({
  className = "",
  accessoriesLeft = null,
  accessoriesRight = null,
  children,
  onClick = undefined,
  type = ButtonType.PRIMARY,
  ...props
}: ButtonProps) {
  const handleButtonClick = useDebouncedClick(() => {
    onClick();
  });
  const classNameTheme = {
    primary: "bg-blue-500 text-white",
    secondary: "",
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`relative cursor-pointer disabled:cursor-not-allowed flex items-center text-center text-sm font-medium rounded-xl hover:brightness-[80%] active:brightness-[110%] min-h-[40px] px-5 py-2 smooth-transform ${classNameTheme[type]} ${className}`}
      {...props}
    >
      {accessoriesLeft && <div>{accessoriesLeft}</div>}
      {children}
      {accessoriesRight && <div>{accessoriesRight}</div>}
    </button>
  );
}
