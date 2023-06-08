import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CircleChart from "../Chart/circleChart";
import { useRatingStore } from "../../store/useRatingStore";
import RatingSkeletonPlaceholder from "./ratingsSkeletonPlaceholder";

function Rating({ navigation }: any): JSX.Element {
  const { rating } = useRatingStore();

  const chartConfig = {
    backgroundGradientFrom: "#141415",
    backgroundGradientTo: "#141415",
    color: (opacity = 1) => `rgba(65, 255, 180, ${opacity})`,
    startAngle: -Math.PI / 2,
  };

  return rating?.pois && rating.security ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("SecurityData")}
      >
        <Text style={styles.ratingTitle}>Securité</Text>
        <CircleChart rating={1} size={4} chartConfig={chartConfig} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("HealthcareScreen")}
      >
        <Text style={styles.ratingTitle}>Santé</Text>
        <CircleChart
          rating={rating?.pois?.healthcare?.rating}
          size={4}
          chartConfig={chartConfig}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("ServicesScreen")}
      >
        <Text style={styles.ratingTitle}>Services</Text>
        <CircleChart
          rating={rating?.pois?.service?.rating}
          size={4}
          chartConfig={chartConfig}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("ShopsScreen")}
      >
        <Text style={styles.ratingTitle}>Commerces</Text>
        <CircleChart
          rating={rating?.pois?.shop?.rating}
          size={4}
          chartConfig={chartConfig}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("RestaurantsScreen")}
      >
        <Text style={styles.ratingTitle}>Restauration</Text>
        <CircleChart
          rating={rating?.pois?.restaurant?.rating}
          size={4}
          chartConfig={chartConfig}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("EducationScreen")}
      >
        <Text style={styles.ratingTitle}>Éducation</Text>
        <CircleChart
          rating={rating?.pois?.education?.rating}
          size={4}
          chartConfig={chartConfig}
        />
      </TouchableOpacity>
    </View>
  ) : (
    <RatingSkeletonPlaceholder />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    // paddingHorizontal: 16,
    marginBottom: 64,
    borderRadius: 16,
    borderColor: "white",
    // padding:10
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    paddingVertical: 2,
    borderColor: "#242529",
    borderWidth: 2,
  },
  ratingTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "PlusJakartaDisplay-Bold",
    width: "100%",
    textAlign: "center",
  },
});

export default Rating;
