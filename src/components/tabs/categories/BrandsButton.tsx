import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

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
        <FontAwesome6
          name="chevron-down"
          size={20}
          color="rgba(0, 0, 0, 0.5)"
          style={styles.icon}
        />
      </Pressable>
    </>
  );
};

export default BrandsButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
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
  icon: {
    width: 20,
    height: 20,
  },
});
