import stylex from "@stylexjs/stylex";
import { Outlet } from "react-router-dom";
import "./App.css";
import { tokens } from "./assets/tokens.stylex";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div {...stylex.props(tokens.fullHeigh, tokens.flex)}>
        <Outlet />
      </div>
    </>
  );
}

const appStyles = stylex.create({
  baseStyles: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Space Grotesk, sans-serif",
  },
});

export default App;
