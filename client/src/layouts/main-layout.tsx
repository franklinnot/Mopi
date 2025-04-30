import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return <div className={`h-dvh ${className || ''}`}>{children}</div>;
}
