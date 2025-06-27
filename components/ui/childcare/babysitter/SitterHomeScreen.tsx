import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SitterHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Babysitter Home (coming soon)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f1eb",
  },
});
