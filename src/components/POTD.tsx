import { PhotoIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { getPictureOftheDayData } from "../api/nasa";
import Loading from "./Loading";

function POTD() {
  const query = useQuery({
    queryKey: ["potdData"],
    queryFn: () => getPictureOftheDayData(),
  });
  if (query.isLoading)
    return (
      <h1>
        <Loading />
      </h1>
    );
  if (query.isError) return <h1>Something went wrong....</h1>;

  return (
    <>
      <div className="container mx-auto">
        <h1 className="flex flex-col items-center text-2xl font-space p-4">
          PICTURE OF THE DAY
        </h1>
        <div className="flex flex-col mx-20 bg-slate-300 rounded-lg p-4">
          <div className="flex justify-between py-4">
            <p>
              Date: <b>{query.data?.date}</b>
            </p>
            <p>
              Title: <b>{query.data?.title}</b>
            </p>
          </div>
          <div className="grid grid-cols-2">
            {query.data.hdurl ? (
              <img
                src={query.data.hdurl}
                alt="picture of the day"
                className="max-w-lg rounded-lg"
              />
            ) : (
              <PhotoIcon className="w-50 text-slate-50" />
            )}

            <h2 className="px-4">Explanation: {query.data?.explanation}</h2>
          </div>
          <div className="py-4">
            Copyright: <b>{query.data?.copyright}</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default POTD;
