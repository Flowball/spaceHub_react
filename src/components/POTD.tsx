import { useQuery } from "@tanstack/react-query";

function POTD() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=KVRMfJv1YoZpHvHlgsNAoIaU8zNJAVViIbsbd2d6"
      );
      const data = await response.json();
      return data;
    },
  });
  if (query.isLoading) return <h1>LOADING....</h1>;
  if (query.isError) return <h1>Something went wrong....</h1>;

  return (
    <div className="flex flex-col gap-4">
      <h1>Copyright: {query.data.copyright}</h1>
      <h1>Title: {query.data.title}</h1>
      <h2>Date: {query.data.date}</h2>
      <h2>Explanation: {query.data.explanation}</h2>
      <img src={query.data.hdurl} alt="" />
    </div>
  );
}

export default POTD;
