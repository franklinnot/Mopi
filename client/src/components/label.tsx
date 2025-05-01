interface LabelProps {
  className?: string;
  htmlFor: string;
  value: string;
}

export default function Label({ className = " ", htmlFor, value}: LabelProps){
  return <label className={` ${className}`} htmlFor={htmlFor}>{value}</label>;
}
