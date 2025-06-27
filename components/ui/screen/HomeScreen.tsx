import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const careOptions = [
  {
    id: "1",
    title: "Child care",
    image: require("@/assets/images/child.webp"),
  },
  {
    id: "2",
    title: "Senior care",
    image: require("@/assets/images/senior.webp"),
  },
  {
    id: "3",
    title: "Adult care",
    image: require("@/assets/images/adult.webp"),
  },
  {
    id: "4",
    title: "Housekeeping",
    image: require("@/assets/images/housekeeping.webp"),
  },
  { id: "5", title: "Pet care", image: require("@/assets/images/pet.webp") },
  {
    id: "6",
    title: "Tutoring",
    image: require("@/assets/images/tutoring.webp"),
  },
];

export default function HomeScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        if (item.id === "1") {
          navigation.navigate("ChildCareAuth");
        }
      }}
    >
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.textRow}>
        <Text style={styles.title}>{item.title}</Text>
        <Ionicons name="chevron-forward" size={20} color="#333" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerWrapper}>
      {/* Top Bar without side padding */}
      <View style={styles.topBar}>
        <Image
          source={require("@/assets/images/logo-icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>Carelum</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>What type of care do you need?</Text>
        <Text style={styles.subheading}>
          Joining Care gives you access to caregivers for the whole household.
        </Text>

        <FlatList
          data={careOptions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      </View>
    </View>
  );
}

const cardWidth = (width - 60) / 2;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: "#f7f1eb",
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f7f1eb",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#ffffff", // Change this to any color like "#003f2b" or "#f7f1eb"
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  logo: {
    marginTop: 25,
    width: 40,
    height: 40,
    marginRight: 15,
    marginLeft: 10,
    transform: [{ scale: 3.5 }],
  },
  logoText: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: "700",
    color: "rgb(86, 28, 161)",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    color: "#444",
    marginBottom: 20,
  },
  grid: {
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    margin: 6,
    alignItems: "center",
    width: cardWidth,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 5,
  },
});
