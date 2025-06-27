import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "../../TopBar";

export default function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <Text>Notifications coming soon</Text>
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
    paddingTop: 60,
  },
});
