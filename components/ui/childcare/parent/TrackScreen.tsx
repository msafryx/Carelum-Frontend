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

export default function TrackScreen({ navigation }: any) {
  const [messages, setMessages] = useState([
    { id: "1", text: "Feeding Emily", time: "10:00 AM" },
    { id: "2", text: "Nap started", time: "11:00 AM" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now().toString(), text: input, time: "now" },
    ]);
    setInput("");
  };

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>John Doe - Babysitter</Text>
        <Text style={styles.timer}>1h 30m left</Text>
        <View style={styles.videoPlaceholder}>
          <Ionicons name="mic" size={40} color="#666" />
          <Text style={styles.videoText}>Live Audio coming soon</Text>
        </View>

        <Text style={styles.sectionTitle}>Session Timeline</Text>
        {messages.map((m) => (
          <View key={m.id} style={styles.logRow}>
            <Text style={styles.logTime}>{m.time}</Text>
            <Text style={styles.logText}>{m.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.chatRow}>
        <TextInput
          style={styles.input}
          placeholder="Message sitter..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

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
  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  timer: {
    textAlign: "center",
    marginBottom: 20,
    color: "#7D3DD2",
  },
  videoPlaceholder: {
    height: 200,
    backgroundColor: "#ddd",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  videoText: {
    marginTop: 6,
    color: "#666",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  logRow: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  logTime: {
    width: 80,
    color: "#555",
    fontSize: 12,
  },
  logText: {
    flex: 1,
  },
  chatRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: "#f7f1eb",
  },
  input: {
    flex: 1,
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
  emergencyButton: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "#d9534f",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
