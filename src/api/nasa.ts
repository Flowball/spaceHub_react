export const getCurisosityData = async (queryDate: string) => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${queryDate}&api_key=KVRMfJv1YoZpHvHlgsNAoIaU8zNJAVViIbsbd2d6`
  );
  const data = await response.json();
  return data;
};

export const getPictureOftheDayData = async () => {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=KVRMfJv1YoZpHvHlgsNAoIaU8zNJAVViIbsbd2d6"
  );
  const data = await response.json();
  return data;
};
