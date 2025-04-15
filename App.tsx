import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
