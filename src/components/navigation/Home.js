import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import Movies from "../screens/Movies";
import Search from "../screens/Search";
import TVShows from "../screens/TVShows";

import Header from "../layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="TVShows" component={TVShows} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
