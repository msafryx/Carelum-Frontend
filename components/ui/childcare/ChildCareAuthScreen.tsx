import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ChildCareAuthScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Continue as</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ParentTabs")}
      >
        <Text style={styles.buttonText}>Parent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SitterHome")}
      >
        <Text style={styles.buttonText}>Babysitter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f1eb",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#7D3DD2",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
