import Svg, { Path } from "react-native-svg";

function StatUpIcon() {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18">
      <Path
        d="M13 17V9M13 9L16 12M13 9L10 12M1 11L9 3L12 6L17 1"
        stroke="#BF3D3D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default StatUpIcon;
