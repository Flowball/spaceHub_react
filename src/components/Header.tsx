import { Link } from "react-router-dom";
import Aside from "./NavBar";

function Header() {
  return (
    <header className="flex flex-row justify-between text-2xl items-center bg-orange-100 rounded-full m-4">
      <div className="p-4">
        <Link to={"/"}>
          <h2>SPEJS 🚀</h2>
        </Link>
      </div>
      <Aside />
    </header>
  );
}

export default Header;
