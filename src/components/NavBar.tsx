import {
  GlobeEuropeAfricaIcon,
  HomeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import stylex from "@stylexjs/stylex";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../assets/tokens.stylex";

const navBarStyles = stylex.create({
  iconStyle: {
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    cursor: "pointer",
    color: {
      ":hover": "#fdf470cc",
    },
    width: "5rem",
    height: "5rem",
    padding: "1rem",
  },
  iconActiveStyle: {
    color: "#FDF470",
  },
});

function NavBar() {
  const location = useLocation().pathname;

  return (
    <aside {...stylex.props(tokens.flex)}>
      <Link
        to={"/"}
        {...stylex.props(
          navBarStyles.iconStyle,
          location == "/" && navBarStyles.iconActiveStyle
        )}
      >
        <HomeIcon />
      </Link>

      <Link
        to={"/spacex"}
        {...stylex.props(
          navBarStyles.iconStyle,
          location == "/spacex" && navBarStyles.iconActiveStyle
        )}
      >
        <RocketLaunchIcon />
      </Link>
      <Link
        to={"/nasa"}
        {...stylex.props(
          navBarStyles.iconStyle,
          location.startsWith("/nasa") && navBarStyles.iconActiveStyle
        )}
      >
        <GlobeEuropeAfricaIcon />
      </Link>
    </aside>
  );
}

export default NavBar;
