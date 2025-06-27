import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ChildCareScreen() {
  const features = [
    { id: "chat", title: "In-App Chat System" },
    { id: "booking", title: "Booking & Scheduling" },
    { id: "payments", title: "Payments & Invoicing" },
    { id: "notifications", title: "Push Notifications" },
    { id: "emergency", title: "Emergency Contact" },
    { id: "location", title: "Tracking & Location Updates" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Child Care Features</Text>
      {features.map((feature) => (
        <TouchableOpacity
          key={feature.id}
          style={styles.featureButton}
          onPress={() => {}}
        >
          <Text style={styles.featureText}>{feature.title}</Text>
          <Ionicons name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#f7f1eb",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  featureButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    elevation: 2,
  },
  featureText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
