import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ParentHomeScreen from "./ParentHomeScreen";
import BookSitterScreen from "./BookSitterScreen";
import ChatbotScreen from "./ChatbotScreen";

const Stack = createNativeStackNavigator();

export default function ParentHomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ParentHomeMain" component={ParentHomeScreen} />
      <Stack.Screen name="BookSitter" component={BookSitterScreen} />
      <Stack.Screen name="Chatbot" component={ChatbotScreen} />
    </Stack.Navigator>
  );
}
