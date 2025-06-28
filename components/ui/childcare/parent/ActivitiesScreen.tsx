import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../TopBar";

const tabs = ["Ongoing", "Completed", "Complaints", "Cancelled"] as const;

interface Activity {
  id: string;
  sitter: string;
  rating: number;
  photo: any;
  date: string;
  start: string;
  end: string;
  duration: string;
  status?: string;
  reason?: string;
}

const ongoing: Activity[] = [
  {
    id: "1",
    sitter: "Jane Doe",
    rating: 4.6,
    photo: require("@/assets/images/adult.webp"),
    date: "July 12",
    start: "2:00 PM",
    end: "6:00 PM",
    duration: "4h",
    status: "Sitter on the way",
  },
];

const completed: Activity[] = [
  {
    id: "2",
    sitter: "Sarah Lee",
    rating: 4.8,
    photo: require("@/assets/images/senior.webp"),
    date: "July 1",
    start: "10:00 AM",
    end: "2:00 PM",
    duration: "4h",
  },
];

const complaints: Activity[] = [
  {
    id: "3",
    sitter: "Maria Silva",
    rating: 4.5,
    photo: require("@/assets/images/adult.webp"),
    date: "June 20",
    start: "1:00 PM",
    end: "5:00 PM",
    duration: "4h",
    reason: "Sitter arrived late",
  },
];

const cancelled: Activity[] = [
  {
    id: "4",
    sitter: "John Smith",
    rating: 4.2,
    photo: require("@/assets/images/adult.webp"),
    date: "June 18",
    start: "9:00 AM",
    end: "12:00 PM",
    duration: "3h",
    reason: "Sitter unavailable",
  },
];

export default function ActivitiesScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Ongoing");

  const getData = () => {
    switch (activeTab) {
      case "Ongoing":
        return ongoing;
      case "Completed":
        return completed;
      case "Complaints":
        return complaints;
      case "Cancelled":
        return cancelled;
      default:
        return [];
    }
  };

  const data = getData();

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
        <ScrollView contentContainerStyle={styles.listContainer}>
          {data.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.photo} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.sitter}</Text>
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={16} color="#f4c150" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <Text style={styles.details}>
                  {item.date} {item.start} - {item.end}
                </Text>
                <Text style={styles.details}>Duration: {item.duration}</Text>
                {activeTab === "Ongoing" && (
                  <Text style={styles.status}>{item.status}</Text>
                )}
                {activeTab === "Complaints" && item.reason && (
                  <Text style={styles.status}>Issue: {item.reason}</Text>
                )}
                {activeTab === "Cancelled" && item.reason && (
                  <Text style={styles.status}>Reason: {item.reason}</Text>
                )}
              </View>
              {activeTab === "Completed" && (
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Rate</Text>
                </TouchableOpacity>
              )}
              {activeTab === "Complaints" && (
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Resolve</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
          {data.length === 0 && (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>No activities</Text>
            </View>
          )}
        </ScrollView>
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
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    marginBottom: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  ratingText: {
    marginLeft: 4,
  },
  details: {
    color: "#555",
    fontSize: 12,
  },
  status: {
    marginTop: 2,
    fontSize: 12,
    color: "#7D3DD2",
  },
  actionButton: {
    backgroundColor: "#7D3DD2",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
  },
  placeholderContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  placeholderText: {
    color: "#444",
  },
});
