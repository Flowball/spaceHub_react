import { ChevronRightIcon } from "@heroicons/react/24/outline";
import stylex from "@stylexjs/stylex";
import { Link, Outlet, useLocation } from "react-router-dom";
import { tokens } from "../assets/tokens.stylex";

function Nasa() {
  const location = useLocation().pathname;
  return (
    <>
      <div
        {...stylex.props(
          tokens.flex,
          tokens.flexCol,
          tokens.justifyAround,
          tokens.fullHeigh,
          tokens.gap2,
          tokens.text2XL
        )}
      >
        <Link to={"/nasa/pictureoftheday"} {...stylex.props(tokens.fullHeigh)}>
          <div
            {...stylex.props(
              nasaStyles.nasaHoverEffect,
              tokens.flex,
              tokens.justifyBetween,
              tokens.itemsCenter,
              tokens.fullHeigh,
              tokens.p4,
              tokens.transitionAll,
              location == "/nasa/pictureoftheday" && nasaStyles.activeYellow
            )}
          >
            <p>Picture of the day</p>
            <ChevronRightIcon {...stylex.props(tokens.size10)} />
          </div>
        </Link>
        <Link to={"/nasa/curiosityphotos"} {...stylex.props(tokens.fullHeigh)}>
          <div
            {...stylex.props(
              nasaStyles.nasaHoverEffect,
              tokens.flex,
              tokens.justifyBetween,
              tokens.itemsCenter,
              tokens.fullHeigh,
              tokens.p4,
              tokens.transitionAll,
              location == "/nasa/curiosityphotos" && nasaStyles.activeYellow
            )}
          >
            <p>Curiosity Photos</p>
            <ChevronRightIcon {...stylex.props(tokens.size10)} />
          </div>
        </Link>
      </div>
      <div {...stylex.props(tokens.fullWidth)}>
        <Outlet />
      </div>
    </>
  );
}

const nasaStyles = stylex.create({
  nasaHoverEffect: {
    backgroundColor: {
      default: "white",
      ":hover": "#fdf470cc",
    },
  },
  activeYellow: {
    backgroundColor: "#FDF470",
  },
});

export default Nasa;
