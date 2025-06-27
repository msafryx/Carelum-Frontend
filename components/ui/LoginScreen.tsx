import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "./TopBar";

export default function LoginScreen({ navigation, route }: any) {
  const { role } = route.params || {};

  const handleLogin = () => {
    if (role === "sitter") {
      navigation.replace("SitterHome");
    } else {
      navigation.replace("ParentTabs");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.heading}>
          Log In as {role === "sitter" ? "Babysitter" : "Parent"}
        </Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Signup", { role })}
        >
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f1eb",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#7D3DD2",
    paddingVertical: 16,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 15,
  },
  linkText: {
    color: "#7D3DD2",
    fontWeight: "bold",
  },
});
