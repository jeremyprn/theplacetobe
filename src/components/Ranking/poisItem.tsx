import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Platform,
} from "react-native";
import { TPoi } from "../../types/entities/poi.spec";
import { ProgressBar } from "react-native-paper";
import ArrowRightIcon from "../../assets/svg/arrowRightIcon";
import { useEffect, useRef, useState } from "react";
import getDistance from "../../helpers/getDistances";
import { useLocationStore } from "../../store/useLocationStore";

function RankingItem(props: any): JSX.Element {
  const pois: TPoi[] = props.pois;
  const type: string = props.type;
  const name: string = props.name;

  const [isOpen, setIsOpen] = useState(false);
  const [poisList, setPoisList] = useState<TPoi[]>([]);
  const [poisIndex, setPoisIndex] = useState<number>(8);
  const [barValue, setBarValue] = useState(1);
  const animationValue = useRef(new Animated.Value(0)).current;
  const { location } = useLocationStore();

  const iconStyles = [
    styles.icon,
    {
      transform: [
        {
          rotate: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "90deg"], // Détermine la rotation finale de l'icône
          }),
        },
      ],
    },
  ];

  const handleToggle = () => {
    setPoisList(
      pois
        .filter(
          (item) =>
            item.properties.type === type || item.properties.type_fr === type
        )
        .slice(0, poisIndex)
    );
    Animated.timing(animationValue, {
      toValue: isOpen ? 0 : 1, // Détermine la valeur finale de l'animation
      duration: 300, // Durée de l'animation en millisecondes
      useNativeDriver: false, // Nécessaire pour les propriétés de style non prises en charge par le pilote natif
    }).start();
    setIsOpen(!isOpen);
  };

  const handleShowMore = () => {
    setPoisIndex(poisIndex + 8);
    setPoisList(
      pois
        .filter(
          (item) =>
            item.properties.type === type || item.properties.type_fr === type
        )
        .slice(0, poisIndex)
    );
  };

  const openInMaps = (lat: number, lng: number, label: string) => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url!);
  };

  return barValue > 0 ? (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer} onPress={handleToggle}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.barContainer}>
          <ProgressBar
            style={styles.bar}
            progress={barValue}
            color={"rgba(65, 255, 180, .65)"}
          />
          <Animated.View style={iconStyles}>
            <ArrowRightIcon />
          </Animated.View>
        </View>
        {isOpen ? (
          <View style={styles.poisDetailsContainer}>
            {poisList.map((item: TPoi, index: number) => (
              <TouchableOpacity
                onPress={() =>
                  openInMaps(
                    item.geometry?.coordinates[1]!,
                    item.geometry?.coordinates[0]!,
                    item.properties.name!
                  )
                }
                style={styles.enseignInfosContainer}
                key={index}
              >
                <View style={styles.enseignInfos}>
                  <Text style={styles.enseignName}>
                    {item.properties.brand ||
                      item.properties.name ||
                      "Non renseigné"}
                  </Text>
                </View>
                <View style={styles.seeOnMapsContainer}>
                  <Text style={styles.enseignDistance}>
                    {"à " +
                      getDistance(location?.coordinates!, {
                        latitude: item.geometry?.coordinates[1]!,
                        longitude: item.geometry?.coordinates[0]!,
                      }) +
                      " km"}
                  </Text>
                  <Text>{"-"}</Text>
                  <Text style={styles.seeOnMaps}>Voir sur la carte</Text>
                </View>
              </TouchableOpacity>
            ))}
            {poisList.length >=
            pois
              .filter(
                (item) =>
                  item.properties.type === type ||
                  item.properties.type_fr === type
              )
              .slice(0, poisIndex).length ? (
              <></>
            ) : (
              <TouchableOpacity
                onPress={handleShowMore}
                style={styles.showMoreButton}
              >
                <Text style={styles.showMoreButtonText}>Voir plus...</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
    </View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  cardContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1E1E1F",
    borderRadius: 12,
    padding: 12,
  },
  seeOnMapsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  seeOnMaps: {
    color: "white",
    fontSize: 14,
    fontFamily: "PlusJakartaDisplay-LightItalic",
  },
  barContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    width: "100%",
    alignSelf: "flex-start",
    color: "white",
    marginBottom: 6,
  },
  bar: {
    borderRadius: 10,
    height: 5,
    width: 150,
    backgroundColor: "#242529",
  },
  poisDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    gap: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  enseignInfosContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  enseignInfos: {
    display: "flex",
    width: "100%",
  },
  enseignName: {
    color: "white",
    width: "100%",

    fontFamily: "PlusJakartaDisplay-Medium",
  },
  enseignDistance: {
    color: "white",
    fontFamily: "PlusJakartaDisplay-Light",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  showMoreButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 32,
    borderRadius: 4,
    backgroundColor: "#242529",
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "PlusJakartaDisplay-Bold",
  },
});

export default RankingItem;
