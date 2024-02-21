import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

function Nasa() {
  return (
    <div className=" flex flex-col text-2xl  justify-around h-full space-y-2 ">
      <Link to={"/nasa/pictureoftheday"} className="h-full">
        <div className="flex justify-between items-center h-full bg-red-400 p-4 cursor-pointer">
          <p>Picture of the day</p>
          <ChevronRightIcon className="w-10 h-10" />
        </div>
      </Link>
      <Link to={"/nasa/marsweather"} className="h-full">
        <div className="flex justify-between items-center h-full bg-red-400 p-4 cursor-pointer">
          <p>Mars Weather</p>
          <ChevronRightIcon className="w-10 h-10" />
        </div>
      </Link>
      <Link to={"/nasa/eonet"} className="h-full">
        <div className="flex justify-between items-center h-full bg-red-400 p-4 cursor-pointer">
          <p>EONET</p>
          <ChevronRightIcon className="w-10 h-10" />
        </div>
      </Link>
      <Outlet />
    </div>
  );
}

export default Nasa;
