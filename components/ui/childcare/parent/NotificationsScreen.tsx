import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../TopBar";

interface NotificationItem {
  id: string;
  title: string;
  time: string;
  type: "booking" | "update" | "message" | "cancel" | "general";
  read: boolean;
}

const initialNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "Booking confirmed with Jane Doe",
    time: "2h ago",
    type: "booking",
    read: false,
  },
  {
    id: "2",
    title: "Sitter has arrived",
    time: "1h ago",
    type: "update",
    read: false,
  },
  {
    id: "3",
    title: "Message from sitter",
    time: "30m ago",
    type: "message",
    read: true,
  },
  {
    id: "4",
    title: "Sitter cancelled your booking",
    time: "1d ago",
    type: "cancel",
    read: true,
  },
];

export default function NotificationsScreen({ navigation }: any) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markRead = (id: string) => {
    setNotifications((n) =>
      n.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  const clearAll = () => {
    setNotifications((n) => n.map((item) => ({ ...item, read: true })));
  };

  const iconForType = (type: NotificationItem["type"]) => {
    switch (type) {
      case "booking":
        return "calendar";
      case "update":
        return "information-circle";
      case "message":
        return "chatbubble";
      case "cancel":
        return "close-circle";
      default:
        return "notifications";
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
        <Text style={styles.clearText}>Clear All</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Notifications</Text>

        {notifications.map((n) => (
          <TouchableOpacity
            key={n.id}
            style={[styles.row, !n.read && styles.unreadRow]}
            onPress={() => markRead(n.id)}
          >
            <Ionicons
              name={iconForType(n.type) as any}
              size={24}
              color="#7D3DD2"
              style={styles.icon}
            />
            <View style={styles.info}>
              <Text style={[styles.title, !n.read && styles.unreadText]}>
                {n.title}
              </Text>
              <Text style={styles.time}>{n.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  clearButton: {
    position: "absolute",
    right: 10,
    top: 40,
    padding: 4,
  },
  clearText: {
    color: "#7D3DD2",
    fontWeight: "600",
  },
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#f7f1eb",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  unreadRow: {
    backgroundColor: "#e6ddff",
  },
  icon: {
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    marginBottom: 4,
  },
  unreadText: {
    fontWeight: "700",
  },
  time: {
    fontSize: 12,
    color: "#777",
  },
});
