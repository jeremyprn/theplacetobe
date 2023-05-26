import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import InputSearch from "../InputSearch/InputSearch";
import PoiList from "../Ranking/poisList";
import GlobalRating from "../Rating/globalRating";
import Rating from "../Rating/ratings";
import Location from "../Location/location";

function HomeScreen({ navigation }: any): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#141415" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.mainContainer}
      >
        <InputSearch />
        <GlobalRating />
        <Location />
        <Rating navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#141415",
    minHeight: "100%",
    paddingHorizontal: 12,
  },
  poisContainer: {
    flex: 1,
  },
  loadingContainer: {
    backgroundColor: "#141415",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
