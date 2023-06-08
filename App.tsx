import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home/home";
import SecurityList from "./src/components/Ranking/securityList";
import EducationScreen from "./src/components/Education/education";
import HealthcareScreen from "./src/components/Healthcare/healthcare";
import ServicesScreen from "./src/components/Services/services";
import ShopsScreen from "./src/components/Shop/shops";
import RestaurantsScreen from "./src/components/Restaurants/restaurants";

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  if (!__DEV__) {
    console.log = () => {};
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SecurityData"
          component={SecurityList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EducationScreen"
          component={EducationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HealthcareScreen"
          component={HealthcareScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ServicesScreen"
          component={ServicesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ShopsScreen"
          component={ShopsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestaurantsScreen"
          component={RestaurantsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
