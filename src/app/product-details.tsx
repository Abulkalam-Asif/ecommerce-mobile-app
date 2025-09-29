import { View, StyleSheet, Animated, Dimensions } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { useProduct } from "../hooks/useProducts";
import Backdrop from "../components/product-details/Backdrop";
import ProductContent from "../components/product-details/ProductContent";
import { theme } from "../constants/theme";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MODAL_HEIGHT = SCREEN_HEIGHT * 0.85;

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // const { data: product, isLoading } = useProduct(Number(id));

  // Animation values
  const translateY = useRef(new Animated.Value(MODAL_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const backdropTranslateY = useRef(new Animated.Value(-200)).current;
  const closeButtonTranslateY = useRef(new Animated.Value(-200)).current;

  // Animation functions
  const animateIn = useCallback(() => {
    Animated.parallel([
      // Modal slides up from bottom
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),

      // Backdrop fades in
      Animated.timing(backdropOpacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }),

      // Backdrop slides down from top with slight delay
      Animated.timing(backdropTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),

      // Close button slides down from top
      Animated.timing(closeButtonTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY, backdropOpacity, backdropTranslateY, closeButtonTranslateY]);

  // Animate in when component mounts
  useEffect(() => {
    animateIn();
  }, [animateIn]);

  return (
    <View style={styles.overlay}>
      {/* Animated Backdrop */}
      <Backdrop
        MODAL_HEIGHT={MODAL_HEIGHT}
        translateY={translateY}
        backdropOpacity={backdropOpacity}
        backdropTranslateY={backdropTranslateY}
        closeButtonTranslateY={closeButtonTranslateY}
      />

      {/* Animated Modal Content */}
      <Animated.View
        style={[
          styles.modalContainer,
          {
            transform: [{ translateY }],
          },
        ]}>
        {/* <ProductContent product={product} isLoading={isLoading} /> */}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: theme.colors.primary_lightest,
    height: MODAL_HEIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
