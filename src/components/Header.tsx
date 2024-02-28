import stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";
import { tokens } from "../assets/tokens.stylex";
import NavBar from "./NavBar";

function Header() {
  return (
    <header {...stylex.props(headerStyles.header)}>
      <div {...stylex.props(tokens.p4)}>
        <Link to={"/"} {...stylex.props(tokens.cursorPointer)}>
          <h2>SPEJS 🚀</h2>
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

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
});

export default Header;
