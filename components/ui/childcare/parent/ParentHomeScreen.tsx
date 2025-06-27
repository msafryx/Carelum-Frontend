import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ParentHomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#333" />
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
      <View style={styles.placeholder}>
        <Text>No upcoming sessions</Text>
      </View>

      <Text style={styles.sectionTitle}>Active Sessions</Text>
      <View style={styles.placeholder}>
        <Text>No active sessions</Text>
      </View>

      <Text style={styles.sectionTitle}>Recommended Sitters</Text>
      <View style={styles.placeholder}>
        <Text>Coming soon</Text>
      </View>

      <Text style={styles.sectionTitle}>Recent Activities</Text>
      <View style={styles.placeholder}>
        <Text>Nothing yet</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f7f1eb",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  placeholder: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
});
