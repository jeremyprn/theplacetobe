import Svg, { Path } from "react-native-svg";

function HealthcareIcon() {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21">
      <Path
        d="M5 20.5V15.5H0V5.5H5V0.5H15V5.5H20V15.5H15V20.5H5ZM2 9.5H7C7.16667 9.5 7.325 9.54167 7.475 9.625C7.625 9.70833 7.74167 9.81667 7.825 9.95L8.7 11.25L10.05 7.2C10.1167 7 10.2373 6.83333 10.412 6.7C10.5867 6.56667 10.7827 6.5 11 6.5C11.1667 6.5 11.325 6.54167 11.475 6.625C11.625 6.70833 11.7417 6.81667 11.825 6.95L13.525 9.5H18V7.5H13V2.5H7V7.5H2V9.5ZM7 18.5H13V13.5H18V11.5H13C12.8333 11.5 12.675 11.4583 12.525 11.375C12.375 11.2917 12.25 11.1833 12.15 11.05L11.3 9.75L9.95 13.8C9.88333 14 9.75833 14.1667 9.575 14.3C9.39167 14.4333 9.19167 14.5 8.975 14.5C8.80833 14.5 8.65 14.4583 8.5 14.375C8.35 14.2917 8.23333 14.1833 8.15 14.05L6.45 11.5H2V13.5H7V18.5Z"
        fill="#41FFB4"
        fill-opacity="0.85"
      />
    </Svg>
  );
}

export default HealthcareIcon;