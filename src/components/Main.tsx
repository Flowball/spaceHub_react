import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="h-full flex">
      <div>MAIN!!</div>
      <Outlet />
    </div>
  );
}

export default Main;
