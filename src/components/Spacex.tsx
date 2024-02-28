import {
  InformationCircleIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";
import { getSpaceXData } from "../api/spaceX";
import { tokens } from "../assets/tokens.stylex";
import { SpaceXdata } from "../types/types";
import Loading from "./Loading";

function Spacex() {
  const query = useQuery<SpaceXdata[]>({
    queryKey: ["spacex-launches"],
    queryFn: () => getSpaceXData(),
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
      <main {...stylex.props(tokens.mxAuto)}>
        <h1
          {...stylex.props(
            tokens.flex,
            tokens.flexCol,
            tokens.itemsCenter,
            tokens.text2XL,
            tokens.p4
          )}
        >
          Compilation of all SpaceX spacecraft launches.
        </h1>

        <div
          {...stylex.props(
            tokens.container,
            tokens.grid,
            tokens.fullWidth,
            tokens.gridCols2,
            tokens.gap4,
            tokens.p4
          )}
        >
          {query.data?.map((data) => (
            <>
              <div
                key={data.id}
                {...stylex.props(
                  spaceXstyles.bigContainer,
                  tokens.flex,
                  tokens.flexCol,
                  tokens.fullWidth,
                  tokens.gap4,
                  tokens.p4,
                  tokens.border2,
                  tokens.roundedLg
                )}
              >
                <div
                  key={data.links.patch.large}
                  {...stylex.props(
                    tokens.flex,
                    tokens.itemsCenter,
                    tokens.gap10
                  )}
                >
                  {data.links.patch.large ? (
                    <img
                      src={data.links.patch.large}
                      alt="Image of current spacex patch"
                      {...stylex.props(tokens.size36)}
                    />
                  ) : (
                    <PhotoIcon {...stylex.props(tokens.size20)} />
                  )}
                  <div key={data.name} {...stylex.props(tokens.text2XL)}>
                    {data.name}
                  </div>
                </div>
                <div
                  {...stylex.props(tokens.flex, tokens.gap4, tokens.text2XL)}
                >
                  {data.links.webcast && (
                    <div
                      {...stylex.props(
                        tokens.flex,
                        tokens.flexRow,
                        tokens.itemsCenter,
                        tokens.cursorPointer
                      )}
                    >
                      <PlayIcon {...stylex.props(spaceXstyles.iconSize)} />
                      <a href={data.links.webcast} target="_blank">
                        Webcast
                      </a>
                    </div>
                  )}

                  {data.links.article ? (
                    <div
                      {...stylex.props(
                        tokens.flex,
                        tokens.flexRow,
                        tokens.cursorPointer,
                        tokens.itemsCenter
                      )}
                    >
                      <NewspaperIcon {...stylex.props(spaceXstyles.iconSize)} />
                      <a href={data.links.article} target="_blank">
                        Article
                      </a>
                    </div>
                  ) : null}
                  {data.links.wikipedia ? (
                    <div
                      {...stylex.props(
                        tokens.flex,
                        tokens.flexRow,
                        tokens.cursorPointer,
                        tokens.itemsCenter
                      )}
                    >
                      <InformationCircleIcon
                        {...stylex.props(spaceXstyles.iconSize)}
                      />
                      <a href={data.links.wikipedia} target="_blank">
                        Wikipedia
                      </a>
                    </div>
                  ) : null}
                </div>
                {data.rocket ? (
                  <div {...stylex.props(tokens.flex, tokens.flexCol)}>
                    <div>RocketID: {data.rocket}</div>
                    <div>LaunchpadID: {data.launchpad}</div>
                  </div>
                ) : (
                  <div>No wiki article available</div>
                )}
                <div {...stylex.props(tokens.textXL)}>{data.name}</div>
                <div>Date: {data.date_utc}</div>
                <div>
                  Success?
                  {data.success ? (
                    <div>Flight Succes</div>
                  ) : (
                    <div>Flight failed</div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
    </>
  );
}

const spaceXstyles = stylex.create({
  iconSize: {
    width: "3rem",
    height: "3rem",
  },
  bigContainer: {
    backgroundColor: "#F1F5F9",
    borderColor: "#F1F5F9",
  },
});

export default Spacex;
