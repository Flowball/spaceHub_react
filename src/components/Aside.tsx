import {
  GlobeEuropeAfricaIcon,
  HomeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <aside className="bg-slate-200">
      <Link to={"/"}>
        <HomeIcon className="w-20 h-20 text-[#1F1F1F] p-4" />
      </Link>
      <Link to={"/spacex"}>
        <RocketLaunchIcon className="w-20 h-20 text-[#1F1F1F] p-4" />
      </Link>
      <Link to={"/nasa"}>
        <GlobeEuropeAfricaIcon className="w-20 h-20 text-[#1F1F1F] p-4" />
      </Link>
    </aside>
  );
}

export default Aside;
