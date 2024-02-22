import {
  GlobeEuropeAfricaIcon,
  HomeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <aside className="flex">
      <Link to={"/"}>
        <HomeIcon
          className={
            (location.pathname == "/" ? "text-[#FDF470]" : "text-[#BFCFE7]") +
            " size-20 p-4"
          }
        />
      </Link>
      <Link to={"/spacex"}>
        <RocketLaunchIcon
          className={
            (location.pathname == "/spacex"
              ? "text-[#FDF470]"
              : "text-[#BFCFE7]") + " size-20 p-4"
          }
        />
      </Link>
      <Link to={"/nasa"}>
        <GlobeEuropeAfricaIcon
          className={
            (location.pathname == "/nasa" ||
            location.pathname == "/nasa/pictureoftheday" ||
            location.pathname == "/nasa/marsweather" ||
            location.pathname == "/nasa/eonet"
              ? "text-[#FDF470]"
              : "text-[#BFCFE7]") + " size-20 p-4"
          }
        />
      </Link>
    </aside>
  );
}

export default NavBar;
