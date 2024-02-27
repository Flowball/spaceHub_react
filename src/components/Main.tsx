import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NasaIcon from "../assets/NasaIcon";
import IconReact from "../assets/ReactIcon";
import SpaceXIcon from "../assets/SpaceXIcon";

import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
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
});

function Main() {
  return (
    // <div className="container p-4 flex flex-col mx-auto gap-4">
    <div {...stylex.props(styles.container)}>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl ">SPEJS 🚀</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-1 bg-[#FDF470] rounded-lg p-4 items-center gap-4">
          <IconReact width={100} height={100} className="rotate" />
          {/* <InboxStackIcon className="size-20 rotate" /> */}
          <div className="text-xl">
            <div>
              This is a school project intended for practicing React JS.
            </div>
            <div>
              This application utilizes React JS, hooks, router, props, and API
              fetching.
            </div>
          </div>
        </div>
        <div className="flex bg-[#FDF470] rounded-lg p-4 items-center text-xl gap-2">
          <CodeBracketIcon className="size-20 " />
          <div>
            Refer to <b>package.json</b> for information regarding dependencies.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-6xl flex flex-col ">
          <h1>Content</h1>
          <p className="flex flex-col text-xl">
            This application uses a navigation bar at the top right to navigate
            around different functions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col bg-[#FDF470] items-center p-4 rounded-lg">
            <SpaceXIcon width={200} height={200} />
            <div>
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
          <div className="flex flex-col bg-[#FDF470] items-center p-4 rounded-lg">
            <NasaIcon width={200} height={200} />
            <div className="w-64 pb-4">
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
