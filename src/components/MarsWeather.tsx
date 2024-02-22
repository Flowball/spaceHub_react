import { useQuery } from "@tanstack/react-query";

function MarsWeather() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.nasa.gov/insight_weather/?api_key=KVRMfJv1YoZpHvHlgsNAoIaU8zNJAVViIbsbd2d6&feedtype=json&ver=1.0"
      );
      const data = await response.json();
      console.log(data);
      return data;
    },
  });
  if (query.isLoading) return <h1>LOADING....</h1>;
  if (query.isError) return <h1>Something went wrong....</h1>;

  return <></>;
}

export default MarsWeather;
