import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { theme } from "@/src/constants/theme";
import { Product } from "@/src/types";
import { FontAwesome6 } from "@expo/vector-icons";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={1}
      onPress={() => {
        console.log("Product pressed:", product.name);
      }}>
      {product.discountPercentage && (
        <View style={styles.discountPercentage}>
          <Text style={styles.discountPercentageText}>
            {product.discountPercentage}% OFF
          </Text>
        </View>
      )}
      <View style={styles.imageContainer}>
        <Image source={product.imageSource} style={styles.image} />
        <View style={styles.addToCartContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log("Add to cart pressed for:", product.name);
            }}
            activeOpacity={0.7}>
            <FontAwesome6 name="plus" size={16} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.nameText} numberOfLines={2} ellipsizeMode="tail">
        {product.name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Rs. {product.price}</Text>
        {product.discountPercentage && (
          <Text style={styles.discountText}>
            Rs.
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(0)}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    justifyContent: "flex-start",
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    maxWidth: 160,
    position: "relative",
  },
  discountPercentage: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: theme.colors.primary_lighter,
    borderTopLeftRadius: 16,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  discountPercentageText: {
    color: theme.colors.primary_darker,
    fontSize: 12,
    fontFamily: theme.fonts.medium,
  },
  imageContainer: {
    padding: 28,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  addToCartContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    borderRadius: 28,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  nameText: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    flex: 1,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  priceText: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
  },
  discountText: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    textDecorationLine: "line-through",
  },
});
