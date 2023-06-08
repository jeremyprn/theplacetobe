import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EducationIcon from "../../assets/svg/educationIcon";
import PoiItem from "../Ranking/poisItem";
import { useRatingStore } from "../../store/useRatingStore";

import { useLocationStore } from "../../store/useLocationStore";
import BackArrowIcon from "../../assets/svg/backArrowIcon";

function EducationScreen({ navigation }: any): JSX.Element {
  const { rating } = useRatingStore();
  const { population } = useLocationStore();
  const data = rating?.pois?.education?.data;

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
        <EducationIcon />
        <Text style={styles.title}>Éducation</Text>
      </View>
      <View style={styles.poisContainer}>
        <PoiItem pois={data} name="École(s) primaire" type="élémentaire" />
        <PoiItem pois={data} name="École(s) maternelle" type="maternelle" />
        <PoiItem pois={data} name="Crèche(s)" type="kindergarten" />
        <PoiItem pois={data} name="Collège(s)" type="collège" />
        <PoiItem pois={data} name="Lycée(s)" type="lycée" />
        <PoiItem pois={data} name="Université(s)" type="university" />
        <PoiItem pois={data} name="Autre école(s)" type="school" />
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

export default EducationScreen;
