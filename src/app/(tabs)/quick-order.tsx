import { StyleSheet, Text, View } from "react-native";
import React from "react";

const QuickOrderScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quick Order Screen</Text>
      <Text style={styles.subText}>This screen won&apos;t be displayed as we handle Quick Order via WhatsApp</Text>
    </View>
  );
};

export default QuickOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
});