import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import GeneralTopBar from "@/src/components/general/GeneralTopBar";

const SettingsScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}>
      <GeneralTopBar text="Settings" />
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  containerContent: {
    paddingBottom: 100,
  },
});
