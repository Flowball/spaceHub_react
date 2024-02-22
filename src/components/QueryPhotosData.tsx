import { useQuery } from "@tanstack/react-query";

function QueryPhotosData() {
  const query = useQuery({
    queryKey: ["data"],
    enabled: false,
    queryFn: async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${queryDate}&api_key=KVRMfJv1YoZpHvHlgsNAoIaU8zNJAVViIbsbd2d6`
      );
      const data = await response.json();
      console.log(data);
      return data;
    },
  });
  if (query.isLoading) return <h1>LOADING....</h1>;
  if (query.isError) return <h1>Something went wrong....</h1>;
  return (
    <>
      {query.data?.map((item) => (
        <img src={item.img_src} alt="" />
      ))}
    </>
  );
}

export default QueryPhotosData;
