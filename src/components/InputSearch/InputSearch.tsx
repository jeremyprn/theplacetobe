import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PositionIcon from "../../assets/svg/positionIcon";
import { useState } from "react";
import useLocation from "../../hooks/useLocation";

function InputSearch(props: any): JSX.Element {
  const [inputText, setInputText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { handleSearchCity, handleChangeLocation } = useLocation();

  const onInputTextChange = async (text: string) => {
    setInputText(text);
    if (text.length > 3) {
      const textToSearch = text.toLowerCase();
      const results = await handleSearchCity(textToSearch);
      setSearchResults(results);
    }
    if (text.length === 0) {
      setSearchResults([]);
    }
  };

  const handleCityPress = (city: any) => {
    setInputText(city.properties.label);
    handleChangeLocation(city);
    setSearchResults([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={["rgba(36, 37, 41, 1)", "rgba(36, 37, 41, 0)"]}
        style={styles.inputSearchContainer}
      >
        <PositionIcon />
        <TextInput
          placeholder="Changer de localisation..."
          onChangeText={onInputTextChange}
          value={inputText}
          style={styles.inputSearch}
        />
      </LinearGradient>
      <View style={styles.citiesResultContainer}>
        {searchResults.map((city) => (
          <TouchableOpacity
            style={styles.cityResultContainer}
            key={city.properties.id}
            onPress={() => handleCityPress(city)}
          >
            <Text style={styles.cityResultName}>{city.properties.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputSearchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    width: "90%",
    borderRadius: 9999,
    paddingHorizontal: 16,
  },
  inputSearch: {
    borderColor: "#252629",
    borderWidth: 1,
    width: "100%",
    borderRadius: 9999,
    padding: 12,
  },
  citiesResultContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    paddingHorizontal: 28,
    backgroundColor: "#252629",
    gap: 2,
  },
  cityResultContainer: {
    width: "100%",
    paddingVertical: 8,
  },
  cityResultName: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
  },
});

export default InputSearch;
