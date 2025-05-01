import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={`min-h-dvh max-w-dvw flex flex-col justify-center items-center px-12  pb-[6rem] ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
