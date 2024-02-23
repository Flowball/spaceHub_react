import { useState } from "react";
import QueryPhotosData from "./QueryPhotosData";

// TYPA SKITEN!!!
function RoverImages() {
  const [queryDate, setQueryDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleDateChange(e) {
    if (e.target.value) {
      setQueryDate(e.target.value);
    }
  }

  return (
    <>
      <div>
        <h1>Insert date for desired images</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="date"
            value={queryDate}
            onChange={(e) => {
              handleDateChange(e);
            }}
          />
          <button className="p-4 bg-red-400">SUBMIT</button>
        </form>
        {/* detta för att inte köra api call direkt ,problem dock, annan lösning? */}
        <div>{queryDate && <QueryPhotosData queryDate={queryDate} />}</div>
      </div>
    </>
  );
}

export default RoverImages;
