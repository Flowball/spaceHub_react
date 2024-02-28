import stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

//Gör om t.ex text till varianter?? En separat fil för återanvändning
const headerStyles = stylex.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    alignItems: "center",
    backgroundColor: "#1F2544",
    color: "#BFCFE7",
  },
  p4: {
    padding: "1rem",
  },
});

function Header() {
  return (
    <header {...stylex.props(headerStyles.header)}>
      <div {...stylex.props(headerStyles.p4)}>
        <Link to={"/"}>
          <h2>SPEJS 🚀</h2>
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
