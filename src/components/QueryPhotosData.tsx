interface Props {
  queryDate: string;
}

import { useQuery } from "@tanstack/react-query";

function QueryPhotosData(props: Props) {
  const query = useQuery({
    queryKey: ["data"],
    // enabled: false,
    queryFn: async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props.queryDate}&api_key=KVRMfJv1YoZpHvHlgsNAoIaU8zNJAVViIbsbd2d6`
      );
      const data = await response.json();
      return data;
    },
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
