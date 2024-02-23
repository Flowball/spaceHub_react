import {
  InformationCircleIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { getSpaceXData } from "../api/spaceX";
import { SpaceXdata } from "../types/types";

function Spacex() {
  const query = useQuery<SpaceXdata[]>({
    queryKey: ["spacex-launches"],
    queryFn: () => getSpaceXData(),
  });
  if (query.isLoading) return <h1>LOADING....</h1>;
  if (query.isError) return <h1>Something went wrong....</h1>;

  const iconStyles = "size-12";

  return (
    <>
      <main className="mx-auto">
        <h1 className="flex flex-col items-center text-2xl p-4">
          Compilation of all SpaceX spacecraft launches.
        </h1>
        <div className="container grid flex-col w-full grid-cols-2 gap-4 p-4">
          {query.data?.map((data) => (
            <>
              <div
                key={data.id}
                className="flex flex-col w-full gap-4 p-4 border-2 rounded-lg bg-slate-100 border-slate-100"
              >
                <div
                  key={data.links.patch.large}
                  className="flex items-center gap-10"
                >
                  {data.links.patch.large ? (
                    <img
                      src={data.links.patch.large}
                      alt="Image of current spacex patch"
                      className="w-36 h-36"
                    />
                  ) : (
                    <PhotoIcon className="w-20 h-20 text-slate-50" />
                  )}
                  <div key={data.name} className="text-2xl ">
                    {data.name}
                  </div>
                </div>
                <div className="flex gap-4 text-2xl">
                  {data.links.webcast && (
                    <div className="flex flex-row items-center">
                      <PlayIcon className={iconStyles} />
                      <a href={data.links.webcast} target="_blank">
                        Webcast
                      </a>
                    </div>
                  )}

                  {data.links.article ? (
                    <div className="flex flex-row items-center">
                      <NewspaperIcon className={iconStyles} />
                      <a href={data.links.article} target="_blank">
                        Article
                      </a>
                    </div>
                  ) : null}
                  {data.links.wikipedia ? (
                    <div className="flex flex-row items-center">
                      <InformationCircleIcon className={iconStyles} />
                      <a href={data.links.wikipedia} target="_blank">
                        Wikipedia
                      </a>
                    </div>
                  ) : null}
                </div>
                {data.rocket ? (
                  <div className="flex flex-col">
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
        </div>
      </main>
    </>
  );
}

export default Spacex;
