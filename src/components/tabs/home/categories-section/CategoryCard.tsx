import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image, ImageSource } from "expo-image";
import { theme } from "@/src/constants/theme";

type Props = {
  imageSource: ImageSource;
  text: string;
};

const CategoryCard = ({ imageSource, text }: Props) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    width: 92,
    height: 130,
  },
  imageContainer: {
    backgroundColor: theme.colors.background,
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    objectFit: "contain",
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    textAlign: "center",
  },
});
