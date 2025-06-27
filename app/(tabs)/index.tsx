import SitterHomeScreen from "@/components/ui/childcare/babysitter/SitterHomeScreen";
import ChildCareAuthScreen from "@/components/ui/childcare/ChildCareAuthScreen";
import ChildCareScreen from "@/components/ui/childcare/ChildCareScreen";
import ParentTabs from "@/components/ui/childcare/parent/ParentTabs";
import HomeScreen from "@/components/ui/screen/HomeScreen";
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
      <Stack.Screen name="ChildCareAuth" component={ChildCareAuthScreen} />
      <Stack.Screen name="ParentTabs" component={ParentTabs} />
      <Stack.Screen name="SitterHome" component={SitterHomeScreen} />
      <Stack.Screen name="ChildCare" component={ChildCareScreen} />
    </Stack.Navigator>
  );
}
