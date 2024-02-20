import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-center text-2xl ">
      <div className="p-4">
        <Link to={"/"}>
          <h2>SPACEHUB 🚀</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
