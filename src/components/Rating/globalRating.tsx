import { StyleSheet, View } from "react-native";
import CircleChart from "../Chart/circleChart";
import { useRatingStore } from "../../store/useRatingStore";
import useRating from "../../hooks/useRating";

function GlobalRating(): JSX.Element {
  const { rating } = useRating();

  const chartConfig = {
    backgroundColor: "#141415",
    backgroundGradientFrom: "#141415",
    backgroundGradientTo: "#141415",
    color: (opacity = 1) => `rgba(65, 255, 180, ${opacity})`,
    startAngle: -Math.PI / 2,
  };

  return (
    <View style={styles.container}>
      <CircleChart size={1.1} rating={7.1} chartConfig={chartConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141415",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

export default GlobalRating;
