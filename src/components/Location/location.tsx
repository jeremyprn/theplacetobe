import { StyleSheet, Text, View } from "react-native";
import useLocation from "../../hooks/useLocation";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import PopulationIcon from "../../assets/svg/populationIcon";
import { useLocationStore } from "../../store/useLocationStore";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

function Location(): JSX.Element {
  const { location, handleLocation } = useLocation();
  const { population } = useLocationStore();

  useEffect(() => {
    handleLocation();
  }, []);

  return location ? (
    <View style={styles.locationContainer}>
      <Text numberOfLines={1} style={styles.street}>
        {location.position.housenumber} {location.position.street}
      </Text>
      <Text numberOfLines={1} style={styles.city}>
        {location.position.city}
      </Text>
      <View style={styles.populationContainer}>
        <PopulationIcon />
        <Text numberOfLines={1} style={styles.populationValue}>
          {population} habitants
        </Text>
      </View>
    </View>
  ) : (
    <SkeletonPlaceholder backgroundColor="#141415" highlightColor="#242529" speed={1000}>
      <View style={styles.locationContainer}>
        <SkeletonPlaceholder.Item width={170} height={18} borderRadius={4} />

        <SkeletonPlaceholder.Item
          width={225}
          height={28}
          borderRadius={4}
          marginTop={8}
        />

        <SkeletonPlaceholder.Item
          width={100}
          height={16}
          borderRadius={4}
          marginTop={8}
        />
      </View>
    </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
  locationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 64,
  },
  populationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 8,
  },
  populationValue: {
    fontSize: 16,
    color: "white",
    fontFamily: "PlusJakartaDisplay-Bold",
  },
  street: {
    fontSize: 18,
    color: "white",
    fontFamily: "PlusJakartaDisplay-Light",
  },
  city: {
    fontSize: 28,
    fontFamily: "PlusJakartaDisplay-Bold",
    color: "white",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Location;
