import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-full flex">
        <Aside />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
