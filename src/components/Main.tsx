import { CodeBracketIcon } from "@heroicons/react/24/outline";
import stylex from "@stylexjs/stylex";
import { useState } from "react";
import { Link } from "react-router-dom";
import NasaIcon from "../assets/NasaIcon";
import IconReact from "../assets/ReactIcon";
import SpaceXIcon from "../assets/SpaceXIcon";
import { tokens } from "../assets/tokens.stylex";

function Main() {
  const [count, setCount] = useState(0);

  function handleRocketClick() {
    setCount(count + 1);
    if (count > 4) {
      setCount(0);
    }
  }

  return (
    <div {...stylex.props(mainStyles.mainContainer, tokens.container)}>
      <div>
        <h1
          {...stylex.props(
            tokens.text6,
            tokens.textCenter,
            tokens.flex,
            tokens.justifyCenter,
            tokens.gap2
          )}
        >
          <p> SPEJS </p>
          <p
            onClick={() => {
              handleRocketClick();
            }}
            {...stylex.props(
              tokens.cursorPointer,
              tokens.userSelectionNone,
              count === 2 && tokens.wiggle,
              count === 3 && tokens.moveRocked
            )}
          >
            🚀
          </p>
        </h1>
      </div>
      <div {...stylex.props(mainStyles.boxContainerGrid, tokens.mt4)}>
        <div {...stylex.props(mainStyles.childContainer)}>
          <IconReact
            width={100}
            height={100}
            {...stylex.props(tokens.rotate)}
          />
          {/* FIXA TILL DENNA */}
          <div {...stylex.props(tokens.textXL)}>
            <div>
              <p>This is a school project intended for practicing React JS.</p>
            </div>
            <div>
              <p>
                This application utilizes React JS, hooks, router, props, and
                API fetching.
              </p>
            </div>
          </div>
        </div>
        <div {...stylex.props(mainStyles.childContainer)}>
          <CodeBracketIcon {...stylex.props(mainStyles.iconSize)} />
          <div {...stylex.props(tokens.textXL)}>
            Refer to <b>package.json</b> for information regarding dependencies.
          </div>
        </div>
      </div>
      <div {...stylex.props(mainStyles.contentContainer, tokens.mt4)}>
        <div {...stylex.props(tokens.text6, tokens.flex, tokens.flexCol)}>
          <h2>Content</h2>
          <p {...stylex.props(tokens.flex, tokens.flexCol, tokens.textXL)}>
            This application uses a navigation bar at the top right to navigate
            around different functions.
          </p>
        </div>
        <div {...stylex.props(mainStyles.boxContainerGrid)}>
          <div
            {...stylex.props(
              mainStyles.childContainer,
              tokens.flexCol,
              tokens.textXL
            )}
          >
            <SpaceXIcon width={200} height={200} /> {/* FIXA DENNA  */}
            <div {...stylex.props(tokens.halfWidth)}>
              <p>The SpaceX section displays all of SpaceX's launches.</p>
              <p>
                The API thats being used it not offical.
                <Link
                  to={
                    "https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md"
                  }
                  target="_blank"
                >
                  <b {...stylex.props(tokens.cursorPointer)}> source</b>
                </Link>
              </p>
            </div>
          </div>
          <div
            {...stylex.props(
              mainStyles.childContainer,
              tokens.flexCol,
              tokens.textXL
            )}
          >
            <NasaIcon width={200} height={200} />
            <div {...stylex.props(tokens.halfWidth)}>
              <p>
                The NASA section provides options to view the picture of the day
                or see images captured by the Mars Rover - Curiosity - on
                specific dates.{" "}
                <Link to={"https://api.nasa.gov/"} target="_blank">
                  <b {...stylex.props(tokens.cursorPointer)}>source</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mainStyles = stylex.create({
  mainContainer: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    gap: 4,
  },

  boxContainerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "1rem",
  },
  childContainer: {
    display: "flex",
    flex: "1 1 0%",
    backgroundColor: "#FDF470",
    borderRadius: "0.5rem",
    padding: "5rem",
    alignItems: "center",
    gap: "1rem",
  },
  iconSize: {
    width: "5rem",
    height: "5rem",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

export default Main;
