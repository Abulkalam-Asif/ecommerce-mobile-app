import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useMyFonts from "../hooks/useMyFonts";

export default function RootLayout() {
  const fontsLoaded = useMyFonts();

  return fontsLoaded ? (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  ) : null;
}
