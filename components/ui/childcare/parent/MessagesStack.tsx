import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatDetailScreen from "./ChatDetailScreen";
import MessagesScreen from "./MessagesScreen";

const Stack = createNativeStackNavigator();

export default function MessagesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MessagesList" component={MessagesScreen} />
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
    </Stack.Navigator>
  );
}
