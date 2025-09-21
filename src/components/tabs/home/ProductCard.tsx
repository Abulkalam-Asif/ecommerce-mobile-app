import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { theme } from "@/src/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { IProduct } from "@/src/types";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  // PENDING: discount calculation (also on the backend)
  // Calculate discount percentage if there's an old price
  const discountPercentage =
    product.OldPrice > product.Price
      ? Math.round(
          ((product.OldPrice - product.Price) / product.OldPrice) * 100
        )
      : 0;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={1}
      onPress={() => {
        router.push({
          pathname: "/product-details",
          params: { id: String(product.Id) },
        });
      }}>
      {discountPercentage > 0 && (
        <View style={styles.discountPercentage}>
          <Text style={styles.discountPercentageText}>
            {discountPercentage}% OFF
          </Text>
        </View>
      )}
      <View style={styles.imageContainer}>
        <Image
          source={product.MainImageUrl || product.ThumbnailUrl}
          style={styles.image}
        />
        <View style={styles.addToCartContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log("Add to cart pressed for:", product.Name);
            }}
            activeOpacity={0.7}>
            <FontAwesome6 name="plus" size={16} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.nameText} numberOfLines={2} ellipsizeMode="tail">
        {product.Name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Rs. {product.Price}</Text>
        {discountPercentage > 0 && (
          <Text style={styles.discountText}>Rs. {product.OldPrice}</Text>
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
