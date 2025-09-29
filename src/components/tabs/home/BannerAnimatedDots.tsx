import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { theme } from "@/src/constants/theme";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type BannerAnimatedDotsProps = {
  bannersCount: number;
  currentIndex: number;
  handleDotPress: (index: number) => void;
};

const BannerAnimatedDots = ({
  bannersCount,
  currentIndex,
  handleDotPress,
}: BannerAnimatedDotsProps) => {
  return (
    <>
      <View style={styles.paginationContainer}>
        {Array.from({ length: bannersCount }).map((_, index) => (
          <AnimatedDot
            key={index}
            isActive={index === currentIndex}
            index={index}
            handleDotPress={handleDotPress}
          />
        ))}
      </View>
    </>
  );
};

export default BannerAnimatedDots;

// Create a proper animated dot component
const AnimatedDot = ({
  isActive,
  index,
  handleDotPress,
}: {
  isActive: boolean;
  index: number;
  handleDotPress: (index: number) => void;
}) => {
  const dotWidth = useSharedValue(isActive ? 36 : 12);

  useEffect(() => {
    dotWidth.value = withSpring(isActive ? 36 : 12, {
      duration: 500,
    });
  }, [isActive, dotWidth]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: dotWidth.value,
  }));

  return (
    <Pressable hitSlop={4} onPress={() => handleDotPress(index)}>
      <Animated.View
        style={[
          styles.paginationDot,
          animatedStyle,
          {
            backgroundColor: isActive
              ? theme.colors.primary
              : theme.colors.placeholder,
          },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    paddingLeft: 26,
    gap: 8,
  },
  paginationDot: {
    height: 12,
    borderRadius: 6,
  },
});
