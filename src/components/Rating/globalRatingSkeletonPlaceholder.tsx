import { StyleSheet, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

function GlobalRatingSkeletonPlaceholder(): JSX.Element {
  return (
    <SkeletonPlaceholder
      backgroundColor="#141415"
      highlightColor="#242529"
      speed={1000}
    >
      <View style={styles.container}>
        <SkeletonPlaceholder.Item width={180} height={180} borderRadius={9999} marginTop={200} />
      </View>
    </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141415",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 215,
  },
});

export default GlobalRatingSkeletonPlaceholder;
