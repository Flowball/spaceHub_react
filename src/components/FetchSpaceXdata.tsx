import { useQuery } from "@tanstack/react-query";

function FetchSpaceXdata() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch("https://api.spacexdata.com/v5/launches");
      const data = await response.json();
      console.log(data);
      return data;
    },
  });
}

export default FetchSpaceXdata;
