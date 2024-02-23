import { CodeBracketIcon, InboxStackIcon } from "@heroicons/react/24/outline";

function Main() {
  return (
    <div className="container p-4 flex flex-col mx-auto gap-4">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl ">SPEJS 🚀</h1>
      </div>
      <div className="flex border-2 p-4 items-center gap-4">
        {/* <IconReact width={100} height={100} className="rotate" /> */}
        <InboxStackIcon className="size-20 rotate" />
        <div className="text-xl">
          <div>This is a school project intended for practicing React JS.</div>
          <div>
            This application utilizes React JS, hooks, router, props, and API
          </div>
          fetching. S
        </div>
      </div>
      <div className="flex border-2 p-4 items-center text-xl gap-2">
        <CodeBracketIcon className="size-20 " />
        <div>
          Refer to <b>package.json</b> for information regarding dependencies.
        </div>
      </div>
      <div>
        <div className="text-6xl flex flex-col items-center">
          <h1>Content</h1>
        </div>
        <h2>
          This application uses a navigation bar at the top right to navigate
          around different functions.
        </h2>
        <h2>SpaceX</h2>
        <p>The SpaceX section displays all of SpaceX's launches.</p>
        <h2>NASA</h2>
        <p>
          The NASA section provides options to view the picture of the day or
          see images captured by the Mars Rover - Curiosity - on specific dates.
        </p>
      </div>
      <h1>have fun!</h1>
    </div>
  );
}

export default Main;
