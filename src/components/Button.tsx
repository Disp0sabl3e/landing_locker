interface ButtonProps {
  value: string;
  className?: string;
  variant?: boolean;
  href: string;
}

const Button = ({ value, className, variant, href }: ButtonProps) => {
  return (
    <div
      className={`${className} relative inline-block rounded-xl p-[1.5px] w-fit ${variant ? 'border-[1.5px] border-white' : 'bg-[linear-gradient(90deg,#E53D2B,#F98738,#F9D549,#FFFFFF,#2BCCF2,#2847D6)]'}`}
    >
      <a href={href} className="rounded-xl bg-gray px-10 py-2 h-full block">
        {value}
      </a>
    </div>
  );
};

export default Button;
