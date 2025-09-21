import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { theme } from "@/src/constants/theme";

type Props = {
  name: string;
  imageSource: string | undefined;
};

export const CategoryCardLoading = () => {
  return (
    <View style={styles.card}>
      <View style={[styles.imageLoading]} />
      <View style={[styles.textLoading]} />
    </View>
  );
};

const CategoryCard = ({ imageSource, name }: Props) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.nameText}>{name}</Text>
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
  imageLoading: {
    backgroundColor: theme.colors.background,
    borderRadius: 12,
    width: 84,
    height: 84,
  },
  textLoading: {
    backgroundColor: theme.colors.background,
    borderRadius: 4,
    width: 60,
    height: 12,
  },
  nameText: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    textAlign: "center",
  },
});
