
interface InputProps {
  className?: string;
  maxLength?: number;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  className = " ",
  maxLength = 48,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={` ${className}`}>
      <input
        type="text"
        maxLength={maxLength}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
