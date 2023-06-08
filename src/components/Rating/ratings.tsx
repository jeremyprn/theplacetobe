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

  const security = rating?.security?.rating;
  const services = rating?.pois?.service?.rating;
  const shops = rating?.pois?.shop?.rating;
  const healthcare = rating?.pois?.healthcare?.rating;
  const restaurants = rating?.pois?.restaurant?.rating;
  const education = rating?.pois?.education?.rating;


  return rating?.pois && rating.security ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("ShopsScreen")}
      >
        <Text style={styles.ratingTitle}>Commerces</Text>
        <CircleChart rating={shops} size={4} chartConfig={chartConfig} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("HealthcareScreen")}
      >
        <Text style={styles.ratingTitle}>Santé</Text>
        <CircleChart rating={healthcare} size={4} chartConfig={chartConfig} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("SecurityData")}
      >
        <Text style={styles.ratingTitle}>Securité</Text>
        <CircleChart rating={security} size={4} chartConfig={chartConfig} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("ServicesScreen")}
      >
        <Text style={styles.ratingTitle}>Services</Text>
        <CircleChart rating={services} size={4} chartConfig={chartConfig} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("RestaurantsScreen")}
      >
        <Text style={styles.ratingTitle}>Restauration</Text>
        <CircleChart rating={restaurants} size={4} chartConfig={chartConfig} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ratingContainer}
        onPress={() => navigation.navigate("EducationScreen")}
      >
        <Text style={styles.ratingTitle}>Éducation</Text>
        <CircleChart rating={education} size={4} chartConfig={chartConfig} />
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
