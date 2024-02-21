import {
  InformationCircleIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { SpaceXdata } from "../types";

function Spacex() {
  const query = useQuery<SpaceXdata[]>({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch("https://api.spacexdata.com/v5/launches");
      const data = await response.json();
      return data;
    },
  });
  if (query.isLoading) return <h1>LOADING....</h1>;
  if (query.isError) return <h1>Something went wrong....</h1>;

  return (
    <>
      <main className=" container p-4 grid grid-cols-2 flex-col  gap-4 w-full mx-auto">
        {/* <h1 className="">SPACE X LAUNCHES</h1> */}
        {query.data?.map((data) => (
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
                {data.links.webcast && (
                  <div className="flex flex-row items-center">
                    <PlayIcon className="w-12 h-12 " />
                    <a href={data.links.webcast} target="_blank">
                      Webcast
                    </a>
                  </div>
                )}

                {data.links.article ? (
                  <div className="flex flex-row items-center">
                    <NewspaperIcon className="w-12 h-12 " />
                    <a href={data.links.article} target="_blank">
                      Article
                    </a>
                  </div>
                ) : null}
                {data.links.wikipedia ? (
                  <div className="flex flex-row items-center">
                    <InformationCircleIcon className="w-12 h-12 " />
                    <a href={data.links.wikipedia} target="_blank">
                      Wikipedia
                    </a>
                  </div>
                ) : null}
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
