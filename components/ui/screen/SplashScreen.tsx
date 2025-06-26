import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function SplashScreen({ onFinish }: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      onFinish();
    });
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@/assets/images/logo.png")}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#6c2bd9", // Purple accent
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
