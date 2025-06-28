import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
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

interface Message {
  id: string;
  text: string;
  sender: "parent" | "sitter";
  time: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hi! Are you available tomorrow?",
    sender: "parent",
    time: "2 min ago",
  },
  {
    id: "2",
    text: "Yes, I am free after 1pm.",
    sender: "sitter",
    time: "1 min ago",
  },
];

export default function ChatDetailScreen({ navigation }: any) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "parent",
      time: "just now",
    };
    setMessages([...messages, newMsg]);
    setInput("");
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 50);
  };

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>Messages</Text>
          <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
            <Ionicons name="search" size={22} color="#333" />
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.messageList}
          onContentSizeChange={() =>
            scrollRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map((m) => (
            <View
              key={m.id}
              style={[
                styles.messageRow,
                m.sender === "parent" ? styles.parentRow : styles.sitterRow,
              ]}
            >
              {m.sender === "parent" && (
                <Image
                  source={require("@/assets/images/logo-icon.png")}
                  style={styles.avatar}
                />
              )}
              <View
                style={[
                  styles.bubble,
                  m.sender === "parent"
                    ? styles.parentBubble
                    : styles.sitterBubble,
                ]}
              >
                <Text>{m.text}</Text>
                <Text style={styles.time}>{m.time}</Text>
              </View>
              {m.sender === "sitter" && (
                <Image
                  source={require("@/assets/images/adult.webp")}
                  style={styles.avatar}
                />
              )}
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={input}
            onChangeText={setInput}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f1eb",
    paddingTop: 60,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  header: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  searchButton: {
    padding: 4,
  },
  messageList: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  parentRow: {
    justifyContent: "flex-start",
  },
  sitterRow: {
    justifyContent: "flex-end",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 6,
  },
  bubble: {
    maxWidth: "70%",
    borderRadius: 12,
    padding: 10,
  },
  parentBubble: {
    backgroundColor: "#dbe8ff",
    marginLeft: 4,
  },
  sitterBubble: {
    backgroundColor: "#e6f5d6",
    marginRight: 4,
  },
  time: {
    fontSize: 10,
    color: "#555",
    marginTop: 4,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
  },
  input: {
    flex: 1,
    maxHeight: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  sendButton: {
    backgroundColor: "#7D3DD2",
    padding: 12,
    borderRadius: 20,
    marginLeft: 8,
  },
});
