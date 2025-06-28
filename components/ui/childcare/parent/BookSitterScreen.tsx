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

interface Sitter {
  id: string;
  name: string;
  age: number;
  languages: string;
  qualifications: string;
  description: string;
  rating: number;
  reviews: number;
  rate: number;
  photo: any;
}

const sitters: Sitter[] = [
  {
    id: "1",
    name: "Jane Doe",
    age: 28,
    languages: "English, Spanish",
    qualifications: "CPR Certified, First Aid",
    description:
      "Experienced babysitter with 5 years of infant and toddler care.",
    rating: 4.5,
    reviews: 123,
    rate: 20,
    photo: require("@/assets/images/adult.webp"),
  },
  {
    id: "2",
    name: "Sarah Lee",
    age: 32,
    languages: "English",
    qualifications: "CPR Certified",
    description:
      "Former preschool teacher available for evenings and weekends.",
    rating: 4.7,
    reviews: 98,
    rate: 22,
    photo: require("@/assets/images/senior.webp"),
  },
  {
    id: "3",
    name: "Maria Silva",
    age: 26,
    languages: "English, Portuguese",
    qualifications: "First Aid",
    description: "Loves outdoor play and creative learning activities.",
    rating: 4.6,
    reviews: 76,
    rate: 19,
    photo: require("@/assets/images/adult.webp"),
  },
];

export default function BookSitterScreen({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [experience, setExperience] = useState("");

  const [selected, setSelected] = useState<Sitter | null>(null);
  const [bookingVisible, setBookingVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("2");
  const [childrenCount, setChildrenCount] = useState("1");
  const [ages, setAges] = useState("");
  const [promo, setPromo] = useState("");

  const rate = selected ? selected.rate : 0;
  const total = rate * parseInt(duration || "0");

  return (
    <View style={{ flex: 1 }}>
      <View>
        <TopBar navigation={navigation} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Select a Babysitter</Text>

        <TextInput
          style={styles.search}
          placeholder="Search sitters"
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.filters}>
          <Text style={styles.filtersTitle}>Filters</Text>
          <View style={styles.filterRow}>
            <Ionicons name="location-sharp" size={20} color="#333" />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />
          </View>
          <View style={styles.filterRow}>
            <Ionicons name="star" size={20} color="#333" />
            <TextInput
              style={styles.input}
              placeholder="Rating (1-5)"
              value={rating}
              keyboardType="number-pad"
              onChangeText={setRating}
            />
          </View>
          <View style={styles.filterRow}>
            <Ionicons name="cash" size={20} color="#333" />
            <TextInput
              style={styles.input}
              placeholder="Price range"
              value={price}
              onChangeText={setPrice}
            />
          </View>
          <View style={styles.filterRow}>
            <Ionicons name="accessibility" size={20} color="#333" />
            <TextInput
              style={styles.input}
              placeholder="Experience"
              value={experience}
              onChangeText={setExperience}
            />
          </View>
        </View>

        {sitters.map((sitter) => (
          <View key={sitter.id} style={styles.card}>
            <Image source={sitter.photo} style={styles.avatar} />
            <Text style={styles.name}>{sitter.name}</Text>
            <Text style={styles.info}>{sitter.age} years old</Text>
            <Text style={styles.info}>{sitter.qualifications}</Text>
            <Text style={styles.info}>Speaks {sitter.languages}</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={20} color="#f4c150" />
              <Text style={styles.ratingText}>
                {sitter.rating} ({sitter.reviews} Reviews)
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelected(sitter);
                  setReviewsVisible(true);
                }}
              >
                <Text style={styles.link}>Read All Reviews</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.actionRow}>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => {
                  setSelected(sitter);
                  setDetailsVisible(true);
                }}
              >
                <Text style={styles.bookText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bookButton}
                onPress={() => {
                  setSelected(sitter);
                  setBookingVisible(true);
                }}
              >
                <Text style={styles.bookText}>Book</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Booking Modal */}
      <Modal visible={bookingVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TopBar navigation={navigation} />
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Book {selected?.name}</Text>
            <View style={styles.inputRow}>
              <Ionicons
                name="calendar"
                size={20}
                color="#333"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputFlex}
                placeholder="Select Date"
                value={date}
                onChangeText={setDate}
              />
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="time"
                size={20}
                color="#333"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputFlex}
                placeholder="Select Time"
                value={time}
                onChangeText={setTime}
              />
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="hourglass"
                size={20}
                color="#333"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputFlex}
                placeholder="Duration (hours)"
                keyboardType="number-pad"
                value={duration}
                onChangeText={setDuration}
              />
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="people"
                size={20}
                color="#333"
                style={styles.icon}
              />
              <TouchableOpacity
                onPress={() =>
                  setChildrenCount((c) => String(Math.max(0, parseInt(c) - 1)))
                }
                style={styles.stepper}
              >
                <Ionicons name="remove" size={20} color="#333" />
              </TouchableOpacity>
              <TextInput
                style={[styles.inputFlex, { textAlign: "center" }]}
                keyboardType="number-pad"
                value={childrenCount}
                onChangeText={setChildrenCount}
              />
              <TouchableOpacity
                onPress={() => setChildrenCount((c) => String(parseInt(c) + 1))}
                style={styles.stepper}
              >
                <Ionicons name="add" size={20} color="#333" />
              </TouchableOpacity>
            </View>
            <View style={styles.inputRow}>
              <Ionicons
                name="accessibility"
                size={20}
                color="#333"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputFlex}
                placeholder="Age of Children"
                value={ages}
                onChangeText={setAges}
                keyboardType="number-pad"
              />
            </View>
            <Text style={styles.total}>Total: ${total}</Text>
            <TextInput
              style={styles.input}
              placeholder="Promo code"
              value={promo}
              onChangeText={setPromo}
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                setBookingVisible(false);
                Alert.alert("Booking confirmed");
              }}
            >
              <Text style={styles.confirmText}>Confirm Booking</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      {/* Details Modal */}
      <Modal visible={detailsVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TopBar navigation={navigation} />
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Image source={selected?.photo} style={styles.avatarLarge} />
            <Text style={styles.modalTitle}>{selected?.name}</Text>
            <Text style={styles.info}>{selected?.age} years old</Text>
            <Text style={styles.info}>{selected?.description}</Text>
            <Text style={styles.info}>{selected?.qualifications}</Text>
            <Text style={styles.info}>Speaks {selected?.languages}</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={20} color="#f4c150" />
              <Text style={styles.ratingText}>
                {selected?.rating} ({selected?.reviews} Reviews)
              </Text>
            </View>
            <Text style={styles.total}>Rate: ${selected?.rate}/hr</Text>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => {
                setDetailsVisible(false);
                setBookingVisible(true);
              }}
            >
              <Text style={styles.bookText}>Book Now</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      {/* Reviews Modal */}
      <Modal visible={reviewsVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TopBar navigation={navigation} />
          <View style={styles.modalContentCenter}>
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
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#f7f1eb",
  },
  search: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  filters: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  filtersTitle: {
    fontWeight: "600",
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
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
  actionRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  viewButton: {
    backgroundColor: "#EF5A77",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  bookButton: {
    backgroundColor: "#7D3DD2",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bookText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 6,
  },
  inputFlex: {
    flex: 1,
    paddingVertical: 10,
  },
  stepper: {
    padding: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  total: {
    fontWeight: "600",
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: "#7D3DD2",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 30,
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
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  modalContentCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  avatarLarge: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: "center",
    marginBottom: 10,
  },
});
