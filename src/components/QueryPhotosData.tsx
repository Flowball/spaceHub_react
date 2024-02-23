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
  if (query.data.photos.length < 1) return <h1>No data on this date</h1>;

  return (
    <>
      {query.data.photos.map((item) => (
        <img src={item.img_src} alt="" key={item.id} />
      ))}
    </>
  );
}

export default QueryPhotosData;
