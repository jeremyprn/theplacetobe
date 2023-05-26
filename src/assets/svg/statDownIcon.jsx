import Svg, { Path } from "react-native-svg";

function StatDownIcon() {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18">
      <Path
        d="M1 7L9 15L12 12L17 17M13 1V9M13 9L16 6M13 9L10 6"
        stroke="#41FFB4"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default StatDownIcon;
