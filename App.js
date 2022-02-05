import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Details from "./src/components/screens/Details";
import Home from "./src/components/navigation/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ route }) => ({
              id: route.params.id,
              type: route.params.type,
              title: "Back to List",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
