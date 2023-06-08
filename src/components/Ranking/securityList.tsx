import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TSecurityData } from "../../types/entities/securityData.spec";
import SecurityIcon from "../../assets/svg/securityIcon";
import StatDownIcon from "../../assets/svg/statDownIcon";
import StatUpIcon from "../../assets/svg/statUpIcon";
import { useRatingStore } from "../../store/useRatingStore";
import BackArrowIcon from "../../assets/svg/backArrowIcon";

function SecurityList({ navigation }: any): JSX.Element {
  const { rating } = useRatingStore();

  const securityStats = (currentYearStats: TSecurityData) => {
    const prevYearData: TSecurityData | undefined = rating?.security?.data
      ?.filter((item: TSecurityData) => item.annee === "21")
      .find((item: TSecurityData) => item.classe === currentYearStats.classe);
    const prevFaits = Number(prevYearData?.faits);
    const currentFaits = Number(currentYearStats?.faits);

    if (prevFaits > currentFaits) {
      return (
        <View style={styles.securityDetailsFaits}>
          <StatDownIcon />
          <Text style={styles.name}>{currentFaits - prevFaits}</Text>
        </View>
      );
    } else if (prevFaits < currentFaits) {
      return (
        <View style={styles.securityDetailsFaits}>
          <StatUpIcon />
          <Text style={styles.name}>+{currentFaits - prevFaits}</Text>
        </View>
      );
    } else {
      return <Text style={{ color: "yellow" }}>-</Text>;
    }
  };

  return rating?.security ? (
    <ScrollView style={styles.securityContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}
      >
        <BackArrowIcon />
        <Text style={styles.backButtonText}>Retour</Text>
      </TouchableOpacity>
      <View style={styles.securityTitleContainer}>
        <SecurityIcon />
        <Text style={styles.title}>Sécurité (en 2022)</Text>
      </View>
      <View style={styles.securityCardsContainer}>
        {rating?.security.data?.map((item: TSecurityData, index: number) => (
          <View key={index} style={styles.security}>
            {item.annee === "22" && Number(item.faits) > 1 ? (
              <View style={styles.securityCardContainer}>
                <Text numberOfLines={1} style={styles.securityCardTitle}>
                  {item.classe}
                </Text>
                <View style={styles.securityDetails}>
                  {securityStats(item)}
                  <View style={styles.securityDetailsFaits}>
                    <Text style={styles.name}>{item.faits}</Text>
                    <Text numberOfLines={1} style={styles.name}>
                      {item.unité_de_compte}(s)
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        ))}
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
  securityContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "#141415",
    minHeight: "100%",
    paddingHorizontal: 22,
    gap: 12,
  },
  securityCardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 32,
  },
  securityTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    marginTop: 32,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: "PlusJakartaDisplay-Bold",
  },
  securityCardContainer: {
    display: "flex",
    height: 80,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  securityCardTitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaDisplay-Regular",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35%",
  },
  securityDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 8,
    width: "100%",
  },
  securityDetailsFaits: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    width: "50%",
    height: "100%",
  },
  security: {
    display: "flex",
    backgroundColor: "#1E1E1F",
    borderRadius: 12,
  },
  name: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 16,
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

export default SecurityList;
