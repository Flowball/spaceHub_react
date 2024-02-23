interface Props {
  queryDate: string;
}

import { useQuery } from "@tanstack/react-query";
import { getCurisosityData } from "../api/nasa";

function QueryPhotosData(props: Props) {
  const query = useQuery({
    queryKey: ["data", props.queryDate],
    // enabled: false,
    queryFn: () => getCurisosityData(props.queryDate),
  });

  if (query.isLoading) return <h1>LOADING....</h1>;
  if (query.isError) return <h1>Something went wrong....</h1>;
  if (query.data.photos.length < 1)
    return (
      <h1>
        Unfortunately, there are no images available for the date{" "}
        <b className="text-red-500">{props.queryDate}</b>
      </h1>
    );

  return (
    <>
      <h1>
        Found <b>{query.data.photos.length}</b> images
      </h1>
      {query.data.photos.map((item) => (
        <img src={item.img_src} alt="" key={item.id} className="rounded-lg" />
      ))}
    </>
  );
}

export default QueryPhotosData;