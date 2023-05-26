import Svg, { Path } from "react-native-svg";

function BackArrowIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        d="M20 11V13H8L13.5 18.5L12.08 19.92L4.16 12L12.08 4.08L13.5 5.5L8 11H20Z"
        fill="white"
      />
    </Svg>
  );
}

export default BackArrowIcon;
