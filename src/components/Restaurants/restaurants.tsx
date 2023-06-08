import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PoiItem from "../Ranking/poisItem";
import { useRatingStore } from "../../store/useRatingStore";
import { useLocationStore } from "../../store/useLocationStore";
import BackArrowIcon from "../../assets/svg/backArrowIcon";
import RestaurationIcon from "../../assets/svg/restaurationIcon";

function RestaurantsScreen({ navigation }: any): JSX.Element {
  const { rating } = useRatingStore();
  const { population } = useLocationStore();
  const data = rating?.pois?.restaurant?.data;

  return data && population ? (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}
      >
        <BackArrowIcon />
        <Text style={styles.backButtonText}>Retour</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <RestaurationIcon />
        <Text style={styles.title}>Restauration</Text>
      </View>
      <View style={styles.poisContainer}>
        <PoiItem pois={data} name="Fast Foods(s)" type="fast_food" />
        <PoiItem pois={data} name="Restaurant(s)" type="restaurant" />
        <PoiItem pois={data} name="Café(s)" type="cafe" />
        <PoiItem pois={data} name="Glace(s)" type="ice_cream" />
        <PoiItem pois={data} name="Autre(s)" type="food_court" />
      </View>
    </ScrollView>
  ) : (
    <View>
      <StatusBar backgroundColor="#141415" />
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginTop: 32,
    marginBottom: 8,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaDisplay-Regular",
  },
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#141415",
    minHeight: "100%",
    paddingHorizontal: 22,
    gap: 12,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 4,
    gap: 8,
    marginTop: 32,
  },
  title: {
    color: "white",
    fontSize: 24,
    textTransform: "capitalize",
    fontFamily: "PlusJakartaDisplay-Bold",
  },
  poisContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
    marginVertical: 48,
  },
  loadingContainer: {
    backgroundColor: "#141415",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RestaurantsScreen;
