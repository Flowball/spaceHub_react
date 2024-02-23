import { useState } from "react";

import { DateEvent } from "../types/types";
import QueryPhotosData from "./QueryPhotosData";

// TYPA SKITEN!!!
function RoverImages() {
  const [queryDate, setQueryDate] = useState("");

  function handleDateChange(e: DateEvent) {
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
