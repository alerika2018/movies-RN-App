import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StyleSheet, Text, View } from "react-native";

import Movies from "./src/components/screens/Movies";
import Search from "./src/components/screens/Search";
import TVShows from "./src/components/screens/TVShows";

import Header from "./src/components/layout/Header";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator> */}

        <Tab.Navigator>
          <Tab.Screen name="Movies" component={Movies} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="TVShows" component={TVShows} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
