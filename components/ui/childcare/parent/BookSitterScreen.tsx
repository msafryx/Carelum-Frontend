import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../TopBar";

export default function BookSitterScreen({ navigation }: any) {
  const [duration, setDuration] = useState("2");
  const [children, setChildren] = useState("1");
  const [promo, setPromo] = useState("");
  const [reviewsVisible, setReviewsVisible] = useState(false);

  const rate = 20; // placeholder hourly rate
  const total = rate * parseInt(duration || "0");

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Jane Doe</Text>
          <Text style={styles.info}>28 years old</Text>
          <Text style={styles.info}>CPR Certified • First Aid</Text>
          <Text style={styles.info}>Speaks English, Spanish</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={20} color="#f4c150" />
            <Text style={styles.ratingText}>4.5 (123 Reviews)</Text>
            <TouchableOpacity onPress={() => setReviewsVisible(true)}>
              <Text style={styles.link}>Read All Reviews</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput style={styles.search} placeholder="Search sitters" />
        <View style={styles.filterBox}>
          <Text style={styles.info}>Filters coming soon</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date & Time</Text>
          <TextInput style={styles.input} placeholder="Pick a date" />
          <TextInput style={styles.input} placeholder="Pick a time" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Duration (hours)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={duration}
            onChangeText={setDuration}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Number of Children</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={children}
            onChangeText={setChildren}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Total Price</Text>
          <Text style={styles.total}>
            ${total} for {duration} hours
          </Text>
        </View>

        <View style={styles.section}>
          <TextInput
            style={styles.input}
            placeholder="Promo code"
            value={promo}
            onChangeText={setPromo}
          />
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => Alert.alert("Booking confirmed")}
        >
          <Text style={styles.confirmText}>Confirm Booking</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={reviewsVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TopBar navigation={navigation} />
          <View style={styles.modalContent}>
            <Text>Reviews coming soon.</Text>
            <TouchableOpacity onPress={() => setReviewsVisible(false)}>
              <Text style={styles.link}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f7f1eb",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    color: "#555",
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ratingText: {
    marginHorizontal: 6,
  },
  link: {
    color: "#7D3DD2",
  },
  search: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  filterBox: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  total: {
    fontWeight: "600",
    marginTop: 4,
  },
  confirmButton: {
    backgroundColor: "#7D3DD2",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#f7f1eb",
  },
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
