import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PoiItem from "./poisItem";
import EducationIcon from "../../assets/svg/educationIcon";
import ShopIcon from "../../assets/svg/shopIcon";
import RestaurationIcon from "../../assets/svg/restaurationIcon";
import LoisirsIcon from "../../assets/svg/loisirsIcon";
import ServiceIcon from "../../assets/svg/serviceIcon";
import HealthcareIcon from "../../assets/svg/healthcareIcon";

function PoiList(props: any): JSX.Element {
  const { pois, population } = props;

  return pois && population ? (
    <ScrollView style={styles.poisContainer}>
      <View style={styles.poiContainer}>
        <View style={styles.poiTitleContainer}>
          <RestaurationIcon />
          <Text style={styles.title}>Restauration</Text>
        </View>

        <PoiItem pois={pois.restaurant} name="Fast Foods(s)" type="fast_food" />
        <PoiItem
          pois={pois.restaurant}
          name="Restaurant(s)"
          type="restaurant"
        />
        <PoiItem pois={pois.restaurant} name="Café(s)" type="cafe" />
      </View>
      <View style={styles.poiContainer}>
        <View style={styles.poiTitleContainer}>
          <ShopIcon />
          <Text style={styles.title}>Commerce</Text>
        </View>
        <PoiItem pois={pois.shop} name="Supermarché(s)" type="supermarket" />
        <PoiItem pois={pois.shop} name="Boulangerie(s)" type="bakery" />
        <PoiItem pois={pois.shop} name="Banque(s)" type="bank" />
        <PoiItem pois={pois.shop} name="Garage(s)" type="car" />
        <PoiItem pois={pois.shop} name="Sport(s)" type="sports" />
      </View>
      <View style={styles.poiContainer}>
        <View style={styles.poiTitleContainer}>
          <EducationIcon />
          <Text style={styles.title}>Éducation</Text>
        </View>
        <PoiItem
          pois={pois.education}
          name="École(s) primaire"
          type="élémentaire"
        />
        <PoiItem
          pois={pois.education}
          name="École(s) maternelle"
          type="maternelle"
        />
        <PoiItem pois={pois.education} name="Crèche(s)" type="kindergarten" />
        <PoiItem pois={pois.education} name="Collège(s)" type="collège" />
        <PoiItem pois={pois.education} name="Lycée(s)" type="lycée" />
      </View>
      <View style={styles.poiContainer}>
        <View style={styles.poiTitleContainer}>
          <HealthcareIcon />
          <Text style={styles.title}>Santé</Text>
        </View>
        <PoiItem pois={pois.healthcare} name="Pharmacie(s)" type="pharmacy" />
        <PoiItem pois={pois.healthcare} name="Hôpital(s)" type="hospital" />
        <PoiItem pois={pois.healthcare} name="Médecin(s)" type="doctor" />
      </View>
      <View style={styles.poiContainer}>
        <View style={styles.poiTitleContainer}>
          <ServiceIcon />
          <Text style={styles.title}>Service</Text>
        </View>
        <PoiItem pois={pois.service} name="Mairie(s)" type="townhall" />
        <PoiItem pois={pois.service} name="Poste(s)" type="post_office" />
        <PoiItem pois={pois.service} name="Police(s)" type="police" />
        <PoiItem pois={pois.service} name="Pompier(s)" type="fire_station" />
      </View>
      <View style={styles.poiContainer}>
        <View style={styles.poiTitleContainer}>
          <LoisirsIcon />
          <Text style={styles.title}>Loisirs</Text>
        </View>
        <PoiItem pois={pois.leisure} name="Cinéma(s)" type="cinema" />
        <PoiItem pois={pois.leisure} name="Bibliothèque(s)" type="library" />
        <PoiItem pois={pois.leisure} name="Musée(s)" type="museum" />
        <PoiItem pois={pois.leisure} name="Parc(s)" type="park" />
        <PoiItem pois={pois.leisure} name="Stade(s)" type="stadium" />
        <PoiItem pois={pois.leisure} name="Théâtre(s)" type="theatre" />
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
  poisContainer: {
    backgroundColor: "#141415",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  poiContainer: {
    display: "flex",
    gap: 4,
    marginBottom: 56,
  },
  poiTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 4,
    gap: 8,
  },
  title: {
    color: "white",
    fontSize: 24,
    textTransform: "capitalize",
    fontFamily: "PlusJakartaDisplay-Bold",
  },
  loadingContainer: {
    backgroundColor: "#141415",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PoiList;
