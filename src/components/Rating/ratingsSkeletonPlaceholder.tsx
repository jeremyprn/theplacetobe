import { StyleSheet, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

function RatingSkeletonPlaceholder(): JSX.Element {
  return (
    <SkeletonPlaceholder
      backgroundColor="#141415"
      highlightColor="#242529"
      speed={1000}
    >
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <SkeletonPlaceholder.Item width={100} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            width={35}
            height={35}
            borderRadius={50}
            marginTop={2}
          />
        </View>
        <View style={styles.ratingContainer}>
          <SkeletonPlaceholder.Item width={100} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            width={35}
            height={35}
            borderRadius={50}
            marginTop={2}
          />
        </View>
        <View style={styles.ratingContainer}>
          <SkeletonPlaceholder.Item width={100} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            width={35}
            height={35}
            borderRadius={50}
            marginTop={2}
          />
        </View>
        <View style={styles.ratingContainer}>
          <SkeletonPlaceholder.Item width={100} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            width={35}
            height={35}
            borderRadius={50}
            marginTop={2}
          />
        </View>
        <View style={styles.ratingContainer}>
          <SkeletonPlaceholder.Item width={100} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            width={35}
            height={35}
            borderRadius={50}
            marginTop={2}
          />
        </View>
        <View style={styles.ratingContainer}>
          <SkeletonPlaceholder.Item width={100} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            width={35}
            height={35}
            borderRadius={50}
            marginTop={2}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 64,
    borderRadius: 16,
    borderColor: "white",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 75,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    paddingVertical: 2,
    borderColor: "#242529",
    borderWidth: 2,
  },
});

export default RatingSkeletonPlaceholder;
