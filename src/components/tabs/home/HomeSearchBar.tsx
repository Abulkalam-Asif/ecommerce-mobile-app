import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";

const HomeSearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search in NayaBazar"
        style={styles.textInput}
        placeholderTextColor={theme.colors.placeholder}
      />
    </View>
  );
};

export default HomeSearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  textInput: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontFamily: theme.fonts.regular,
  },
});
