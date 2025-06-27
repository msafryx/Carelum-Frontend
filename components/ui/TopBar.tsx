import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TopBar({ navigation }: any) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Image
        source={require("@/assets/images/logo-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.logoText}>Carelum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#f7f1eb",
  },
  backButton: {
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginLeft: 20,
    transform: [{ scale: 3 }],
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgb(86, 28, 161)",
  },
});
