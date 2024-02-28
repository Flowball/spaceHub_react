interface Props {
  queryDate: string;
}

import stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";
import { getCurisosityData } from "../api/nasa";
import { tokens } from "../assets/tokens.stylex";
import { CuriosityData } from "../types/types";
import Loading from "./Loading";

function QueryPhotosData(props: Props) {
  const query = useQuery({
    queryKey: ["data", props.queryDate],
    queryFn: () => getCurisosityData(props.queryDate),
  });

  if (query.isLoading)
    return (
      <h1>
        <Loading />
      </h1>
    );
  if (query.isError) return <h1>Something went wrong....</h1>;
  if (query.data.photos.length < 1)
    return (
      <h1 {...stylex.props(tokens.textXL)}>
        Unfortunately, there are no images available for the date{" "}
        <b {...stylex.props(tokens.textRed)}>{props.queryDate}</b>
      </h1>
    );

  return (
    <>
      <h1 {...stylex.props(tokens.textXL)}>
        Found <b>{query.data.photos.length}</b> images
      </h1>
      {query.data.photos.map((item: CuriosityData) => (
        <img
          src={item.img_src}
          alt=""
          key={item.id}
          {...stylex.props(tokens.roundedLg, tokens.fullWidth)}
        />
      ))}
    </>
  );
}

export default QueryPhotosData;
