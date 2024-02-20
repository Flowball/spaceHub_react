import {
  InformationCircleIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { spacexData } from "../data";
import FetchSpaceXdata from "./FetchSpaceXdata";

function Spacex() {
  const data = FetchSpaceXdata();
  console.log(data);

  return (
    <>
      <main className=" container p-4 flex flex-col  gap-4 w-full mx-auto">
        {/* <h1 className="">SPACE X LAUNCHES</h1> */}
        {spacexData.map((data) => (
          <>
            <div
              key={data.id}
              className="border-2 w-full flex flex-col gap-4 bg-slate-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-10">
                {data.links.patch.large ? (
                  <img
                    src={data.links.patch.large}
                    alt="Image of current spacex patch"
                    className="w-36 h-36"
                  />
                ) : (
                  <PhotoIcon className="w-20 h-20 text-slate-50" />
                )}
                <div className="text-2xl">{data.name}</div>
              </div>
              <div className="flex gap-4 text-2xl">
                {data.links.webcast ? (
                  <div className="flex flex-row items-center">
                    <PlayIcon className="w-12 h-12 " />
                    <a href={data.links.webcast} target="_blank">
                      Webcast
                    </a>
                  </div>
                ) : (
                  <div>No webcast available</div>
                )}

                {data.links.article ? (
                  <div className="flex flex-row items-center">
                    <NewspaperIcon className="w-12 h-12 " />
                    <a href={data.links.article} target="_blank">
                      Article
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {data.links.wikipedia ? (
                  <div className="flex flex-row items-center">
                    <InformationCircleIcon className="w-12 h-12 " />
                    <a href={data.links.wikipedia} target="_blank">
                      Wikipedia
                    </a>
                  </div>
                ) : (
                  <div>No wiki article available</div>
                )}
              </div>
              {data.rocket ? (
                <div className="flex flex-col ">
                  <div>RocketID: {data.rocket}</div>
                  <div>LaunchpadID: {data.launchpad}</div>
                </div>
              ) : (
                <div>No wiki article available</div>
              )}
              <div className="text-xl">{data.name}</div>
              <div>Date: {data.date_utc}</div>
              <div>
                Success?{" "}
                {data.success ? (
                  <div>Flight Succes</div>
                ) : (
                  <div>Flight failed</div>
                )}
              </div>
            </div>
          </>
        ))}
      </main>
    </>
  );
}

export default Spacex;
