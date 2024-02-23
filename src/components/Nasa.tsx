import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation } from "react-router-dom";

function Nasa() {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col justify-around h-full space-y-2 text-2xl ">
        <Link to={"/nasa/pictureoftheday"} className="h-full">
          <div
            className={
              (location.pathname == "/nasa/pictureoftheday"
                ? "bg-[#FDF470]"
                : "bg-[#F2F5F9]") +
              " flex justify-between items-center h-full p-4 cursor-pointer transition-all rounded-br-lg hover:bg-[#FDF470]"
            }
          >
            <p>Picture of the day</p>
            <ChevronRightIcon className="w-10 h-10" />
          </div>
        </Link>
        <Link to={"/nasa/curiosityphotos"} className="h-full">
          <div
            className={
              (location.pathname == "/nasa/curiosityphotos"
                ? "bg-[#FDF470]"
                : "bg-[#F2F5F9]") +
              " flex justify-between items-center h-full p-4 cursor-pointer transition-all rounded-tr-lg hover:bg-[#FDF470]"
            }
          >
            <p>Curiosity Photos</p>
            <ChevronRightIcon className="w-10 h-10" />
          </div>
        </Link>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
}

export default Nasa;
