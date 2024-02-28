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
  flexCol: {
    flexDirection: "column",
  },
  flexRow: {
    flexDirection: "row",
  },
  rotate: {
    animation: "rotation 25s infinite linear",
  },
  halfWidth: {
    width: "50%",
  },
  fullWidth: {
    width: "100%",
  },
  flexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mxAuto: {
    margin: "0 auto",
  },
  mt4: {
    marginTop: "1rem",
  },
  border2: {
    borderWidth: "2px",
  },
  roundedLg: {
    borderRadius: "0.5rem",
  },
  itemsCenter: {
    alignItems: "center",
  },
  gap4: {
    gap: "1rem",
  },
  gap10: {
    gap: "2.5rem",
  },
  size20: {
    width: "5rem",
    height: "5rem",
  },
  size36: {
    width: "9rem",
    height: "9rem",
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
