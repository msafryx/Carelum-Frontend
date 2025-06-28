import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../TopBar";

interface Conversation {
  id: string;
  name: string;
  avatar: any;
  lastMessage: string;
  time: string;
  unread: boolean;
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Jane Smith",
    avatar: require("@/assets/images/adult.webp"),
    lastMessage: "See you tomorrow!",
    time: "1h ago",
    unread: true,
  },
  {
    id: "2",
    name: "Alex Brown",
    avatar: require("@/assets/images/adult.webp"),
    lastMessage: "Thanks for the update",
    time: "3h ago",
    unread: false,
  },
];

export default function MessagesScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        {conversations.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={styles.row}
            onPress={() => navigation.navigate("ChatDetail", { id: c.id })}
          >
            <Image source={c.avatar} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{c.name}</Text>
              <Text style={styles.message}>{c.lastMessage}</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.time}>{c.time}</Text>
              {c.unread && <View style={styles.unreadDot} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 10,
    backgroundColor: "#f7f1eb",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
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
    marginBottom: 4,
  },
  message: {
    color: "#555",
  },
  right: {
    alignItems: "flex-end",
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#7D3DD2",
    marginTop: 4,
  },
});
