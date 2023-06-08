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
import ShopIcon from "../../assets/svg/shopIcon";

function ShopsScreen({ navigation }: any): JSX.Element {
  const { rating } = useRatingStore();
  const { population } = useLocationStore();
  const data = rating?.pois?.shop?.data;

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
        <ShopIcon />
        <Text style={styles.title}>Commerces</Text>
      </View>
      <View style={styles.poisContainer}>
        <PoiItem pois={data} name="Supermarché(s)" type="supermarket" />
        <PoiItem pois={data} name="Boulangerie(s)" type="bakery" />
        <PoiItem pois={data} name="Banque(s)" type="bank" />
        <PoiItem pois={data} name="Garage(s)" type="car_repair" />
        <PoiItem pois={data} name="Opticien(s)" type="optician" />
        <PoiItem pois={data} name="Vêtement(s)" type="clothes" />
        <PoiItem pois={data} name="Chaussure(s)" type="shoes" />
        <PoiItem pois={data} name="Sport(s)" type="sports" />
        <PoiItem pois={data} name="Jardinerie(s)" type="garden_centre" />
        <PoiItem pois={data} name="Agent(s) immobilier" type="estate_agent" />
        <PoiItem pois={data} name="Autre(s)" type="variety_store" />
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

export default ShopsScreen;
