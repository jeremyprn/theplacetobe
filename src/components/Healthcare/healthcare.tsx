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
import HealthcareIcon from "../../assets/svg/healthcareIcon";
import BackArrowIcon from "../../assets/svg/backArrowIcon";

function HealthcareScreen({ navigation }: any): JSX.Element {
  const { rating } = useRatingStore();
  const { population } = useLocationStore();
  const data = rating?.pois?.healthcare?.data;

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
        <HealthcareIcon />
        <Text style={styles.title}>Santé</Text>
      </View>
      <View style={styles.poisContainer}>
        <PoiItem pois={data} name="Pharmacie(s)" type="pharmacy" />
        <PoiItem pois={data} name="Hôpital(s)" type="hospital" />
        <PoiItem pois={data} name="Médecin(s)" type="doctor" />
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

export default HealthcareScreen;
