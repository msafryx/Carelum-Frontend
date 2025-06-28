import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BookSitterScreen from "./BookSitterScreen";
import ChatbotScreen from "./ChatbotScreen";
import ChildProfilesScreen from "./ChildProfilesScreen";
import ParentHomeScreen from "./ParentHomeScreen";
import ScheduleScreen from "./ScheduleScreen";
import SettingsScreen from "./SettingsScreen";

const Stack = createNativeStackNavigator();

export default function ParentHomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ParentHomeMain" component={ParentHomeScreen} />
      <Stack.Screen name="BookSitter" component={BookSitterScreen} />
      <Stack.Screen name="Chatbot" component={ChatbotScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="ChildProfiles" component={ChildProfilesScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
