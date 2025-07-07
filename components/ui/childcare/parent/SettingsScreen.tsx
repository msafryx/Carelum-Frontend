import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "../../TopBar";

export default function SettingsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.placeholder}>Settings coming soon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f1eb",
  },
  placeholder: {
    color: "#444",
  },
});
