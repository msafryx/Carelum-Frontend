import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "../../TopBar";

export default function ChatbotScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>AI Chatbot</Text>
        <Text style={styles.text}>
          Customize child data and get care recommendations here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f1eb",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    color: "#444",
  },
});
