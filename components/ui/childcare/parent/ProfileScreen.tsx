import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "../../TopBar";

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <Text>Profile</Text>
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
  },
});
