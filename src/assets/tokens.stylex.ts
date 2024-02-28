import * as stylex from "@stylexjs/stylex";

export const tokens = stylex.create({
  flex: {
    display: "flex",
  },
  grid: {
    display: "grid",
  },
  gridCols2: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  bgRed: {
    background: "red",
  },
  p4: {
    padding: "1rem",
  },
  px4: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },

  px10: {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
  },
  py2: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
  py4: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  text6: {
    fontSize: "3.75rem",
    lineHeight: 1,
  },
  text2XL: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  textXL: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  text6XL: {
    fontSize: "6rem",
    lineHeight: "1rem",
  },
  textWhite: {
    color: "#ffff",
  },
  textRed: {
    color: "rgb(239 68 68)",
  },
  flexCol: {
    flexDirection: "column",
  },
  flexRow: {
    flexDirection: "row",
  },
  rotate: {
    animation: "rotation 25s infinite linear",
  },
  fastRotate: {
    animation: "rotation 3s infinite linear",
  },
  halfWidth: {
    width: "50%",
  },
  fullWidth: {
    width: "100%",
  },
  width56: {
    width: "14rem",
  },
  fullHeigh: {
    height: "100%",
  },
  flexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mxAuto: {
    margin: "0 auto",
  },
  mx20: {
    marginLeft: "5rem",
    marginRight: "5rem",
  },
  mt4: {
    marginTop: "1rem",
  },
  mt16: {
    marginTop: "4rem",
  },
  border2: {
    borderWidth: "2px",
  },
  roundedLg: {
    borderRadius: "0.5rem",
  },
  roundedFull: {
    borderRadius: "999999px",
  },
  itemsCenter: {
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  gap2: {
    gap: "0.5rem",
  },
  gap4: {
    gap: "1rem",
  },
  gap10: {
    gap: "2.5rem",
  },
  size10: {
    width: "2.5rem",
    height: "2.5rem",
  },
  size20: {
    width: "5rem",
    height: "5rem",
  },
  size36: {
    width: "9rem",
    height: "9rem",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  spaceY2: {
    marginTop: " calc(0.5rem/* 8px */ * calc(1 - var(--tw-space-y-reverse)))",
    marginBottom: " calc(0.5rem/* 8px */ * var(--tw-space-y-reverse))",
  },

  transitionAll: {
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  },
  cursorPointer: {
    cursor: "pointer",
  },
  container: {
    width: "100%",
    maxWidth: {
      "@media (min-width: 640px)": "640px",
      "@media (min-width: 768px)": "768px",
      "@media (min-width: 1024px)": "1024px",
      "@media (min-width: 1280px)": "1280px",
      "@media (min-width: 1536px)": "1536px",
    },
  },
});
