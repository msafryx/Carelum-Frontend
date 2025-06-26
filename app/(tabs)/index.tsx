import HomeScreen from "@/components/ui/screen/HomeScreen"; // Add this if needed
import LandingScreen from "@/components/ui/screen/LandingScreen";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <SplashScreen
        onFinish={() => {
          setIsLoading(false);
        }}
      />
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
