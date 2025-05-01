import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center px-10 pb-14">
      {<Outlet />}
    </div>
  );
}
