import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../TopBar";

export default function ParentHomeScreen({ navigation }: any) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuPress = () => {
    setMenuVisible((prevState) => !prevState); // Toggle menu visibility
  };
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.burgerButton} onPress={handleMenuPress}>
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
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickText}>Track</Text>
          </TouchableOpacity>
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

      <TouchableOpacity
        style={styles.chatbotButton}
        onPress={() => navigation.navigate("Chatbot")}
      >
        <Ionicons name="chatbubbles" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.emergencyButton} onPress={() => {}}>
        <Ionicons name="call" size={26} color="#fff" />
      </TouchableOpacity>
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
  chatbotButton: {
    position: "absolute",
    bottom: 80,
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
    bottom: 80,
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
    position: "absolute", // Position it on top of the screen
    top: 40, // Align with the top bar's height (adjust as necessary)
    right: 10, // Right corner
    zIndex: 1, // Ensure it's on top of the content
  },
});
