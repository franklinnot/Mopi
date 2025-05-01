import logoSrc from "../assets/logo.svg";

interface LogoProps {
  className?: string;
}

// Function component to display the logo.
export default function Logo({
  className = "",
}: LogoProps) {
  return (
    <a href="/" className={`inline-flex justify-center items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Mopi Logo's"
        className='w-full max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem] 
                    drop-shadow-md transition-all duration-300 ease-in-out'
      />
    </a>
  );
}
