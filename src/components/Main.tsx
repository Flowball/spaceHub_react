import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NasaIcon from "../assets/NasaIcon";
import IconReact from "../assets/ReactIcon";
import SpaceXIcon from "../assets/SpaceXIcon";

import stylex from "@stylexjs/stylex";

const mainStyles = stylex.create({
  container: {
    width: "100%",
    maxWidth: {
      "@media (min-width: 640px)": "640px",
      "@media (min-width: 768px)": "768px",
      "@media (min-width: 1024px)": "1024px",
      "@media (min-width: 1280px)": "1280px",
      "@media (min-width: 1536px)": "1536px",
    },
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    gap: 4,
  },
  flexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sizeXlText: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  sizeSixText: {
    fontSize: "3.75rem",
    lineHeight: 1,
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
    padding: "1rem",
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
    marginTop: "1rem",
  },
  flex: {
    display: "flex",
  },
  flexCol: {
    flexDirection: "column",
  },
  halfWidth: {
    width: "50%",
  },
  rotate: {
    animation: "rotation 25s infinite linear",
  },
});

function Main() {
  return (
    <div {...stylex.props(mainStyles.container)}>
      <div {...stylex.props(mainStyles.flexColCenter)}>
        <h1 {...stylex.props(mainStyles.sizeSixText)}>SPEJS 🚀</h1>
      </div>
      <div {...stylex.props(mainStyles.boxContainerGrid)}>
        <div {...stylex.props(mainStyles.childContainer)}>
          <IconReact
            width={100}
            height={100}
            {...stylex.props(mainStyles.rotate)}
          />
          {/* FIXA TILL DENNA */}
          <div {...stylex.props(mainStyles.sizeXlText)}>
            <div>
              This is a school project intended for practicing React JS.
            </div>
            <div>
              This application utilizes React JS, hooks, router, props, and API
              fetching.
            </div>
          </div>
        </div>
        <div {...stylex.props(mainStyles.childContainer)}>
          <CodeBracketIcon {...stylex.props(mainStyles.iconSize)} />
          <div {...stylex.props(mainStyles.sizeXlText)}>
            Refer to <b>package.json</b> for information regarding dependencies.
          </div>
        </div>
      </div>
      <div {...stylex.props(mainStyles.contentContainer)}>
        <div
          {...stylex.props(
            mainStyles.sizeSixText,
            mainStyles.flex,
            mainStyles.flexCol
          )}
        >
          <h1>Content</h1>
          <p
            {...stylex.props(
              mainStyles.flex,
              mainStyles.flexCol,
              mainStyles.sizeXlText
            )}
          >
            This application uses a navigation bar at the top right to navigate
            around different functions.
          </p>
        </div>
        <div {...stylex.props(mainStyles.boxContainerGrid)}>
          <div
            {...stylex.props(
              mainStyles.childContainer,
              mainStyles.flexCol,
              mainStyles.sizeXlText
            )}
          >
            <SpaceXIcon width={200} height={200} /> {/* FIXA DENNA  */}
            <div {...stylex.props(mainStyles.halfWidth)}>
              <p>The SpaceX section displays all of SpaceX's launches.</p>
              <p>
                The API thats being used it not offical.
                <Link
                  to={
                    "https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md"
                  }
                  target="_blank"
                >
                  <b> source</b>
                </Link>
              </p>
            </div>
          </div>
          <div
            {...stylex.props(
              mainStyles.childContainer,
              mainStyles.flexCol,
              mainStyles.sizeXlText
            )}
          >
            <NasaIcon width={200} height={200} />
            <div {...stylex.props(mainStyles.halfWidth)}>
              <p>
                The NASA section provides options to view the picture of the day
                or see images captured by the Mars Rover - Curiosity - on
                specific dates.{" "}
                <Link to={"https://api.nasa.gov/"} target="_blank">
                  <b>source</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
