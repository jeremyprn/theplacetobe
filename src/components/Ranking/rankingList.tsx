import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import usePoi from "../../hooks/useRating";
import { useLocationStore } from "../../store/useLocationStore";
import PoisList from "./poisList";
import SecurityList from "./securityList";

function RankingList(): JSX.Element {
  const { rating } = usePoi();
  const { population } = useLocationStore();

  return population ? (
    <ScrollView style={styles.rankingContainer}>
      <SecurityList security={rating?.security} />
      <PoisList pois={rating?.pois} population={population} />
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
  rankingContainer: {
    backgroundColor: "#141415",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 16,
  },
  loadingContainer: {
    backgroundColor: "#141415",
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RankingList;
