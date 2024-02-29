export const getSpaceXData = async () => {
  const response = await fetch("https://api.spacexdata.com/v5/launches");
  const data = await response.json();
  console.log(data);
  return data;
};
