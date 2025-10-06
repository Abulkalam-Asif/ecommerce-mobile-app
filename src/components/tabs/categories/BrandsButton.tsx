import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { theme } from "@/src/constants/theme";

type BrandsButtonProps = {
  onPress: () => void;
  selectedBrands: number[];
};

const BrandsButton = ({ onPress, selectedBrands }: BrandsButtonProps) => {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}>
        <Text style={styles.text}>
          Brands {selectedBrands.length > 0 && `(${selectedBrands.length})`}
        </Text>
        <FontAwesome6
          name="chevron-down"
          size={16}
          color="rgba(0, 0, 0, 0.5)"
        />
      </Pressable>
    </>
  );
};

export default BrandsButton;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  buttonPressed: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: "rgba(0, 0, 0, 0.5)",
  },
});
