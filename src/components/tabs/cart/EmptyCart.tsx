import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "@/src/constants/theme";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function EmptyCart() {
  const handleStartShopping = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Shopping Bag Icon */}
        <View style={styles.iconContainer}>
          <Image
            source={require("@/src/assets/icons/bags.png")}
            style={styles.icon}
          />
        </View>

        {/* Empty State Text */}
        <Text style={styles.title}>Your cart is empty</Text>
        <Text style={styles.subtitle}>
          Looks like you haven&apos;t added anything yet
        </Text>
      </View>

      {/* Start Shopping Button */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleStartShopping}>
          <Text style={styles.buttonText}>Start Shopping</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  iconContainer: {
    marginBottom: 24,
  },
  icon: {
    width: 100,
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_secondary,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  buttonContainer: {
    paddingBottom: 40,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: "#fff",
  },
});
