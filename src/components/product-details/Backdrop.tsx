import { Animated, Pressable, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { theme } from "@/src/constants/theme";

type BackdropProps = {
  MODAL_HEIGHT: number;
  translateY: Animated.Value;
  backdropOpacity: Animated.Value;
  backdropTranslateY: Animated.Value;
  closeButtonTranslateY: Animated.Value;
};

const Backdrop = ({
  MODAL_HEIGHT,
  translateY,
  backdropOpacity,
  backdropTranslateY,
  closeButtonTranslateY,
}: BackdropProps) => {
  const isClosing = React.useRef(false);

  const animateOut = () => {
    // Prevent multiple calls
    if (isClosing.current) return;
    isClosing.current = true;

    Animated.parallel([
      // Modal slides down
      Animated.timing(translateY, {
        toValue: MODAL_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }),

      // Backdrop fades out
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),

      // Backdrop slides up
      Animated.timing(backdropTranslateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),

      // Close button slides up
      Animated.timing(closeButtonTranslateY, {
        toValue: -200,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (router.canGoBack()) {
        router.back();
      }
    });
  };

  const handleClose = () => {
    animateOut();
  };
  return (
    <>
      {/* Animated Backdrop with slide from top */}
      <Animated.View
        style={[
          styles.backdrop,
          {
            opacity: backdropOpacity,
            transform: [{ translateY: backdropTranslateY }],
          },
        ]}>
        <Pressable style={styles.backdropPressable} onPress={handleClose} />
      </Animated.View>

      {/* Animated Close Button with slide from top */}
      <Animated.View
        style={[
          styles.closeButtonContainer,
          {
            transform: [{ translateY: closeButtonTranslateY }],
          },
        ]}>
        <Pressable onPress={handleClose} style={styles.closeButton}>
          <FontAwesome6 name="x" size={20} color={theme.colors.text} />
        </Pressable>
      </Animated.View>
    </>
  );
};

export default Backdrop;

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "120%", // Make it taller to account for sliding
    backgroundColor: "black",
  },
  backdropPressable: {
    flex: 1,
  },
  closeButtonContainer: {
    position: "absolute",
    top: 20,
    left: "50%",
    marginLeft: -16, // Half of button width to center it
    zIndex: 1000,
    width: 40,
    height: 40,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
