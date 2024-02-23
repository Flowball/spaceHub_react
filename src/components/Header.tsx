import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="flex flex-row justify-between text-2xl items-center bg-[#1F2544] font-space text-[#BFCFE7] ">
      <div className="p-4">
        <Link to={"/"}>
          <h2>SPEJS 🚀</h2>
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
