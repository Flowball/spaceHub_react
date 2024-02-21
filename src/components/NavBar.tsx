import {
  GlobeEuropeAfricaIcon,
  HomeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function Aside() {
  const location = useLocation();

  return (
    <aside className="flex">
      <Link to={"/"}>
        <HomeIcon
          className={
            (location.pathname == "/" ? "text-[#525CEB]" : "text-[#BFCFE7]") +
            " size-20 p-4"
          }
        />
      </Link>
      <Link to={"/spacex"}>
        <RocketLaunchIcon
          className={
            (location.pathname == "/spacex"
              ? "text-[#525CEB]"
              : "text-[#BFCFE7]") + " size-20 p-4"
          }
        />
      </Link>
      <Link to={"/nasa"}>
        <GlobeEuropeAfricaIcon
          className={
            (location.pathname == "/nasa"
              ? "text-[#525CEB]"
              : "text-[#BFCFE7]") + " size-20 p-4"
          }
        />
      </Link>
    </aside>
  );
}

export default Aside;
