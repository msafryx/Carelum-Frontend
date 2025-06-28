import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopBar from "../../TopBar";

const tabs = ["Ongoing", "Completed", "Complaints", "Cancelled"] as const;

export default function ActivitiesScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Ongoing");

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.tabRow}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.content}>
          <Text style={styles.placeholder}>
            {activeTab} activities coming soon
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#f7f1eb",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#e0d8f5",
  },
  activeTab: {
    backgroundColor: "#7D3DD2",
  },
  tabText: {
    color: "#333",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    color: "#444",
  },
});
