import SitterHomeScreen from "@/components/ui/childcare/babysitter/SitterHomeScreen";
import ChildCareAuthScreen from "@/components/ui/childcare/ChildCareAuthScreen";
import ChildCareScreen from "@/components/ui/childcare/ChildCareScreen";
import MessagesScreen from "@/components/ui/childcare/parent/MessagesScreen";
import ParentTabs from "@/components/ui/childcare/parent/ParentTabs";
import LoginScreen from "@/components/ui/LoginScreen";
import HomeScreen from "@/components/ui/screen/HomeScreen";
import LandingScreen from "@/components/ui/screen/LandingScreen";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import SignupScreen from "@/components/ui/SignupScreen";
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
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ParentTabs" component={ParentTabs} />
      <Stack.Screen name="SitterHome" component={SitterHomeScreen} />
      <Stack.Screen name="ChildCare" component={ChildCareScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}
