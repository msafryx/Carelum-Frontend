import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HomeScreen from "@/components/ui/screen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Carelum" }}
      />
    </Stack.Navigator>
  );
}
