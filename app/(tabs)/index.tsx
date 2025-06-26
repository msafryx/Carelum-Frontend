import LandingScreen from "@/components/ui/screen/LandingScreen";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SplashScreen
          onFinish={() => {
            setIsLoading(false);
          }}
        />
      ) : (
        <LandingScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
