import { useState } from "react";

function RoverImages() {
  const [queryDate, setQueryDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleDateChange(e) {
    if (e.target.value) {
      setQueryDate(e.target.value);
      console.log(e.target.value);
    }
  }
  function queryData() {}

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
        <div>
          <h1>response</h1>
        </div>
      </div>
    </>
  );
}

export default RoverImages;
