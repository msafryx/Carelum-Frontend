import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../TopBar";
import HamburgerMenu from "./HamburgerMenu";

export default function ParentHomeScreen({ navigation }: any) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuPress = () => {
    setMenuVisible((prevState) => !prevState); // Toggle menu visibility
  };

  const upcomingSessions = [
    {
      id: "1",
      sitter: "Jane Doe",
      child: "Alice",
      date: "Jul 15",
      time: "2:00 PM - 6:00 PM",
      photo: require("@/assets/images/adult.webp"),
    },
    {
      id: "2",
      sitter: "Sarah Lee",
      child: "Bob",
      date: "Jul 20",
      time: "5:00 PM - 9:00 PM",
      photo: require("@/assets/images/senior.webp"),
    },
  ];

  const activeSessions = [
    {
      id: "3",
      sitter: "Maria Silva",
      child: "Charlie",
      time: "1:00 PM - 5:00 PM",
      photo: require("@/assets/images/adult.webp"),
      status: "In progress",
    },
  ];

  const recommendedSitters = [
    {
      id: "4",
      name: "John Smith",
      rating: 4.7,
      photo: require("@/assets/images/adult.webp"),
    },
    {
      id: "5",
      name: "Emily Stone",
      rating: 4.8,
      photo: require("@/assets/images/senior.webp"),
    },
  ];

  const recentActivities = [
    {
      id: "6",
      text: "Completed session with Sarah Lee",
      date: "Jul 1",
    },
    {
      id: "7",
      text: "Cancelled booking with John Smith",
      date: "Jun 28",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.burgerButton}
        onPress={() => setMenuVisible(true)}
      >
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>
      <TopBar navigation={navigation} onMenuPress={() => {}} />
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput placeholder="Search sitters" style={styles.search} />

        <View style={styles.quickRow}>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => navigation.navigate("BookSitter")}
          >
            <Text style={styles.quickText}>Book Sitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => navigation.navigate("Schedule")}
          >
            <Text style={styles.quickText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickText}>Track</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
        {upcomingSessions.map((s) => (
          <View key={s.id} style={styles.card}>
            <Image source={s.photo} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{s.sitter}</Text>
              <Text style={styles.details}>
                {s.date} – {s.time}
              </Text>
              <Text style={styles.details}>Child: {s.child}</Text>
            </View>
          </View>
        ))}
        {upcomingSessions.length === 0 && (
          <View style={styles.placeholder}>
            <Text>No upcoming sessions</Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>Active Sessions</Text>
        {activeSessions.map((s) => (
          <View key={s.id} style={styles.card}>
            <Image source={s.photo} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{s.sitter}</Text>
              <Text style={styles.details}>{s.time}</Text>
              <Text style={styles.status}>{s.status}</Text>
            </View>
          </View>
        ))}
        {activeSessions.length === 0 && (
          <View style={styles.placeholder}>
            <Text>No active sessions</Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>Recommended Sitters</Text>
        <View style={styles.recommendedRow}>
          {recommendedSitters.map((s) => (
            <View key={s.id} style={styles.recommendedItem}>
              <Image source={s.photo} style={styles.recAvatar} />
              <Text style={styles.nameCenter}>{s.name}</Text>
              <View style={styles.ratingRowCenter}>
                <Ionicons name="star" size={14} color="#f4c150" />
                <Text style={styles.ratingText}>{s.rating}</Text>
              </View>
            </View>
          ))}
          {recommendedSitters.length === 0 && (
            <View style={styles.placeholder}>
              <Text>No recommendations</Text>
            </View>
          )}
        </View>

        <Text style={styles.sectionTitle}>Recent Activities</Text>
        {recentActivities.map((a) => (
          <View key={a.id} style={styles.activityRow}>
            <Text style={styles.details}>{a.date}</Text>
            <Text style={styles.activityText}>{a.text}</Text>
          </View>
        ))}
        {recentActivities.length === 0 && (
          <View style={styles.placeholder}>
            <Text>Nothing yet</Text>
          </View>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.chatbotButton}
        onPress={() => navigation.navigate("Chatbot")}
      >
        <Ionicons name="chatbubbles" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.emergencyButton} onPress={() => {}}>
        <Ionicons name="call" size={26} color="#fff" />
      </TouchableOpacity>
      <HamburgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
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
  placeholder: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  search: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  quickButton: {
    flex: 1,
    backgroundColor: "#7D3DD2",
    marginHorizontal: 4,
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  quickText: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
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
  details: {
    fontSize: 12,
    color: "#555",
  },
  status: {
    marginTop: 2,
    fontSize: 12,
    color: "#7D3DD2",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
  },
  recommendedRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  recommendedItem: {
    alignItems: "center",
    marginRight: 15,
  },
  recAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 6,
  },
  nameCenter: {
    fontWeight: "600",
    fontSize: 12,
  },
  ratingRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityRow: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  activityText: {
    marginTop: 2,
  },
  chatbotButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#7D3DD2",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  emergencyButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#d9534f",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  burgerButton: {
    position: "absolute",
    top: 40,
    right: 10,
    zIndex: 1,
  },
});
