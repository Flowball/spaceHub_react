import stylex from "@stylexjs/stylex";
import { tokens } from "../assets/tokens.stylex";

function Loading() {
  return (
    <div {...stylex.props(loadingStyles.absolutePos)}>
      <div {...stylex.props(tokens.fastRotate, tokens.text6XL)}>🚀</div>
      <div {...stylex.props(tokens.text2XL, tokens.mt16)}>Loading...</div>
    </div>
  );
}
const loadingStyles = stylex.create({
  absolutePos: {
    position: "absolute",
    top: "50%",
    left: "50%",
    translate: "(-50%, -50%)",
  },
});
export default Loading;
