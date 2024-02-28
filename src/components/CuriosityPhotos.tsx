import stylex from "@stylexjs/stylex";
import { ChangeEvent, useState } from "react";
import { tokens } from "../assets/tokens.stylex";
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
      <div
        {...stylex.props(
          tokens.flex,
          tokens.flexCol,
          tokens.container,
          tokens.px10,
          tokens.itemsCenter,
          tokens.mxAuto
        )}
      >
        <h1 {...stylex.props(tokens.text2XL, tokens.p4)}>
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
            {...stylex.props(
              tokens.textXL,
              tokens.px4,
              tokens.py2,
              tokens.roundedFull
            )}
          />
        </form>
        <div
          {...stylex.props(
            tokens.flex,
            tokens.flexCol,
            tokens.itemsCenter,
            tokens.p4,
            tokens.textXL,
            tokens.gap2
          )}
        >
          {queryDate && <QueryPhotosData queryDate={queryDate} />}
        </div>
      </div>
    </>
  );
}

export default RoverImages;
