import React from "react";
import { StyleSheet, View } from "react-native";
import { useModal } from "@/src/contexts/ModalContext";

export const ModalPortal = () => {
  const { modals } = useModal();

  if (modals.length === 0) {
    return null;
  }

  return (
    <View style={styles.portalContainer}>
      {modals.map((modal) => (
        <React.Fragment key={modal.id}>{modal.content}</React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  portalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999, // High z-index to appear above everything
    pointerEvents: "box-none", // Allow touch events to pass through when no modals
  },
});
