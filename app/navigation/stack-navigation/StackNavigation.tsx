import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HomeScreen from "@/components/ui/screen/HomeScreen";
import LandingScreen from "@/components/ui/screen/LandingScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        options={{ headerShown: false }}
        component={LandingScreen}
      />
      <Stack.Screen
        name="Home"
        options={{ title: "Home Screen" }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
