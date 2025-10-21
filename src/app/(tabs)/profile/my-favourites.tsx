import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import GeneralTopBar from "@/src/components/general/GeneralTopBar";

const MyFavouritesScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}>
      <GeneralTopBar text="My Favourites" />
    </ScrollView>
  );
};

export default MyFavouritesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  containerContent: {
    paddingBottom: 100,
  },
});
