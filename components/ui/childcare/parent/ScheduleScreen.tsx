import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../TopBar";

interface Booking {
  id: string;
  sitter: string;
  sitterPhoto: any;
  child: string;
  childPhoto: any;
  date: string;
  time: string;
  duration: number;
  rating?: number;
}

const upcoming: Booking[] = [
  {
    id: "1",
    sitter: "Jane Doe",
    sitterPhoto: require("@/assets/images/adult.webp"),
    child: "Tom",
    childPhoto: require("@/assets/images/child.webp"),
    date: "July 15",
    time: "2:00 PM",
    duration: 2,
  },
];

const past: Booking[] = [
  {
    id: "2",
    sitter: "Sarah Lee",
    sitterPhoto: require("@/assets/images/senior.webp"),
    child: "Lucy",
    childPhoto: require("@/assets/images/child.webp"),
    date: "June 10",
    time: "1:00 PM",
    duration: 3,
    rating: 5,
  },
];

export default function ScheduleScreen({ navigation }: any) {
  const [bookings, setBookings] = useState(upcoming);
  const [history, setHistory] = useState(past);

  const cancelBooking = (id: string) => {
    Alert.alert("Cancel booking?", "This cannot be undone", [
      { text: "No" },
      {
        text: "Yes",
        onPress: () =>
          setBookings((b) => b.filter((booking) => booking.id !== id)),
      },
    ]);
  };

  const rescheduleBooking = (id: string) => {
    Alert.alert("Reschedule", "Feature coming soon");
  };

  const rebookSitter = (b: Booking) => {
    Alert.alert("Rebook", "Feature coming soon");
  };

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Upcoming Bookings</Text>
        {bookings.map((b) => (
          <View key={b.id} style={styles.card}>
            <View style={styles.row}>
              <Image source={b.sitterPhoto} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{b.sitter}</Text>
                <Text style={styles.info}>
                  {b.date}, {b.time} ({b.duration}h)
                </Text>
                <View style={styles.childRow}>
                  <Image source={b.childPhoto} style={styles.childAvatar} />
                  <Text style={styles.info}>{b.child}</Text>
                </View>
              </View>
            </View>
            <View style={styles.actionRow}>
              <TouchableOpacity
                onPress={() => rescheduleBooking(b.id)}
                style={styles.actionButton}
              >
                <Ionicons name="time" size={20} color="#333" />
                <Text style={styles.actionText}>Reschedule</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => cancelBooking(b.id)}
                style={styles.actionButton}
              >
                <Ionicons name="close" size={20} color="#333" />
                <Text style={styles.actionText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Past Bookings</Text>
        {history.map((b) => (
          <View key={b.id} style={styles.card}>
            <View style={styles.row}>
              <Image source={b.sitterPhoto} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{b.sitter}</Text>
                <Text style={styles.info}>
                  {b.date}, {b.time} ({b.duration}h)
                </Text>
              </View>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={18} color="#f4c150" />
                <Text style={styles.ratingText}>{b.rating}/5</Text>
              </View>
            </View>
            <View style={styles.actionRow}>
              <TouchableOpacity
                onPress={() => rebookSitter(b)}
                style={styles.actionButton}
              >
                <Ionicons name="refresh" size={20} color="#333" />
                <Text style={styles.actionText}>Rebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f7f1eb",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  info: {
    color: "#555",
  },
  childRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  childAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 6,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  actionText: {
    marginLeft: 4,
    color: "#333",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    color: "#333",
  },
});
