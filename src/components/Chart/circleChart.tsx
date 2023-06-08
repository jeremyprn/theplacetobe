import { ProgressChart } from "react-native-chart-kit";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CircleChart = (props: any) => {
  const { rating, size, chartConfig } = props;

  return (
    <View style={styles.container}>
      <ProgressChart
        style={styles.chartContainer}
        data={{
          data: [rating / 10],
        }}
        width={Dimensions.get("window").width / size}
        height={220 / size}
        strokeWidth={32 / size}
        radius={72 / size}
        chartConfig={{
          ...chartConfig,
          color: (opacity = 1) => {
            if(rating/10 < 0.25){
              return `rgba(180, 60, 60, ${opacity})`
            }
            else if(rating/10 < 0.75){
              return `rgba(65, 160, 115, ${opacity})`
            }
            
            return `rgba(65, 255, 180, ${opacity})`
          },
        }}
        hideLegend={true}
      />
      <Text style={[{ fontSize: 48 / size }, styles.ratingOverlay]}>
        {rating}
      </Text>
      <LinearGradient
        colors={[
          "rgba(20, 20,21, 0)",
          "rgba(20, 20,21, .35)",
          "rgba(20, 20,21, 1)",
        ]}
        style={styles.chartOverlay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  chartContainer: {
    transform: [{ rotateX: "180deg" }, { rotateY: "180deg" }],
  },
  chartOverlay: {
    position: "absolute",
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2,
  },
  ratingOverlay: {
    position: "absolute",
    color: "white",
    fontFamily: "PlusJakartaDisplay-Bold",
    zIndex: 1,
  },
});

export default CircleChart;
