import logoSrc from "../assets/logo.svg";

// Function component to display the logo.
export default function Logo() {
  return (
    <a href="/" className="w-min flex">
      <img
        src={logoSrc}
        alt="Mopi Logo's"
        className="min-w-[10rem] w-[40%] max-w-[16rem] 
                   drop-shadow-md drop-shadow-zinc-700 
                   transition-all duration-300 ease-in-out"
      />
    </a>
  );
}
