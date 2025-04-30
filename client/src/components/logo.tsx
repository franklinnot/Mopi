import logoSrc from "../assets/logo.svg";

// Function component to display the logo.
export default function Logo() {
  return (
    <a href="/" className="w-full flex justify-center content-center">
      <img
        src={logoSrc}
        alt="Mopi Logo's"
        className="w-full max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem]
                   drop-shadow-md drop-shadow-zinc-700 
                   transition-all duration-300 ease-in-out"
      />
    </a>
  );
}
