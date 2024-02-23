import { ChangeEvent, useState } from "react";

import QueryPhotosData from "./QueryPhotosData";

function RoverImages() {
  const [queryDate, setQueryDate] = useState("");

  function handleDateChange(e: ChangeEvent<{ value: string }>) {
    if (e.target.value) {
      setQueryDate(e.target.value);
    }
  }

  return (
    <>
      <div className="flex flex-col container px-10 items-center mx-auto">
        <h1 className="text-2xl p-4">
          Find images captured by the Curiosity rover on a specific earth date
          of your choice.
        </h1>
        <form>
          <input
            type="date"
            value={queryDate}
            onChange={(e) => {
              handleDateChange(e);
            }}
            className="text-xl px-4 py-2 rounded-full"
          />
        </form>
        <div className="flex flex-col items-center p-4 text-xl gap-2">
          {queryDate && <QueryPhotosData queryDate={queryDate} />}
        </div>
      </div>
    </>
  );
}

export default RoverImages;
