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
import ServiceIcon from "../../assets/svg/serviceIcon";

function ServicesScreen({ navigation }: any): JSX.Element {
  const { rating } = useRatingStore();
  const { population } = useLocationStore();
  const data = rating?.pois?.service?.data;

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
        <ServiceIcon />
        <Text style={styles.title}>Services</Text>
      </View>
      <View style={styles.poisContainer}>
      <PoiItem pois={data} name="Mairie(s)" type="townhall" />
        <PoiItem pois={data} name="Poste(s)" type="post_office" />
        <PoiItem pois={data} name="Police(s)" type="police" />
        <PoiItem pois={data} name="Pompier(s)" type="fire_station" />
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

export default ServicesScreen;
