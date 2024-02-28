import { PhotoIcon } from "@heroicons/react/24/outline";
import stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";
import { getPictureOftheDayData } from "../api/nasa";
import { tokens } from "../assets/tokens.stylex";
import Loading from "./Loading";

function POTD() {
  const query = useQuery({
    queryKey: ["potdData"],
    queryFn: () => getPictureOftheDayData(),
  });
  if (query.isLoading)
    return (
      <h1>
        <Loading />
      </h1>
    );
  if (query.isError) return <h1>Something went wrong....</h1>;

  return (
    <>
      <div {...stylex.props(tokens.container, tokens.mxAuto)}>
        <h1
          {...stylex.props(
            tokens.flex,
            tokens.flexCol,
            tokens.itemsCenter,
            tokens.text2XL,
            tokens.p4
          )}
        >
          PICTURE OF THE DAY
        </h1>
        <div
          {...stylex.props(
            tokens.flex,
            tokens.flexCol,
            tokens.mx20,
            POTDstyles.cardBackground,
            tokens.roundedLg,
            tokens.p4
          )}
        >
          <div
            {...stylex.props(tokens.flex, tokens.justifyBetween, tokens.py4)}
          >
            <p>
              Date: <b>{query.data?.date}</b>
            </p>
            <p>
              Title: <b>{query.data?.title}</b>
            </p>
          </div>
          <div {...stylex.props(tokens.grid, tokens.gridCols2)}>
            {query.data.hdurl ? (
              <img
                src={query.data.hdurl}
                alt="picture of the day"
                {...stylex.props(tokens.roundedLg, tokens.fullWidth)}
              />
            ) : (
              <PhotoIcon {...stylex.props(tokens.width56, tokens.textWhite)} />
            )}
            <p {...stylex.props(tokens.px4, tokens.textXL)}>
              <b>Explanation:</b>
              <br />
              {query.data?.explanation}
            </p>
          </div>
          <div {...stylex.props(tokens.py4)}>
            Copyright: <b>{query.data?.copyright}</b>
          </div>
        </div>
      </div>
    </>
  );
}

const POTDstyles = stylex.create({
  cardBackground: {
    backgroundColor: "rgb(203 213 225)",
  },
});

export default POTD;
