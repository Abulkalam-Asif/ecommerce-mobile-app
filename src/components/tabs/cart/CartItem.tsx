import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { theme } from "@/src/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

type CartItemProps = {
  item: {
    Id: number;
    MainImageUrl: any;
    Name: string;
    Price: number;
    OldPrice?: number;
    quantity: number;
    discount?: string;
  };
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
};

const CartItem = ({ item, onQuantityChange, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.Id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(item.Id, newQuantity);
    }
  };

  const calculateDiscount = () => {
    if (item.OldPrice && item.OldPrice > item.Price) {
      return item.OldPrice - item.Price;
    }
    return 0;
  };

  const discount = calculateDiscount();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.itemCard,
        pressed && styles.itemCardPressed,
      ]}
      onPress={() => router.push(`/product-details?id=${item.Id}`)}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={item.MainImageUrl}
          style={styles.productImage}
          contentFit="contain"
        />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productNameText} numberOfLines={2}>
          {item.Name}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.currentPriceText}>Rs. {item.Price}</Text>
          {item.OldPrice && item.OldPrice > item.Price && (
            <Text style={styles.oldPriceText}>Rs. {item.OldPrice}</Text>
          )}
          {discount > 0 && (
            <Text style={styles.discountTag}>{`Rs. ${discount} off`}</Text>
          )}
        </View>
      </View>

      {/* Quantity Controls */}
      <View style={styles.quantityContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.quantityButton,
            pressed && styles.quantityButtonPressed,
          ]}
          onPress={quantity > 1 ? handleDecrement : () => onRemove(item.Id)}>
          {quantity > 1 ? (
            <FontAwesome6 name="minus" size={14} color={theme.colors.text} />
          ) : (
            <FontAwesome6 name="trash" size={14} color={theme.colors.text} />
          )}
        </Pressable>

        <Text style={styles.quantityText}>{quantity}</Text>

        <Pressable
          style={({ pressed }) => [
            styles.quantityButton,
            pressed && styles.quantityButtonPressed,
          ]}
          onPress={handleIncrement}>
          <FontAwesome6 name="plus" size={14} color={theme.colors.text} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 1,
    alignItems: "center",
  },
  itemCardPressed: {
    backgroundColor: theme.colors.background_3,
    opacity: 0.8,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  productImage: {
    width: 40,
    height: 40,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 12,
  },
  productNameText: {
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
    color: "#333",
    lineHeight: 20,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: 10,
  },
  currentPriceText: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.secondary,
  },
  oldPriceText: {
    fontSize: 12,
    color: "red",
    textDecorationLine: "line-through",
    fontFamily: theme.fonts.regular,
  },
  discountTag: {
    backgroundColor: theme.colors.tag,
    fontSize: 8,
    lineHeight: 16,
    fontFamily: theme.fonts.semibold,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    color: "black",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.background,
  },
  quantityButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  quantityButtonPressed: {
    backgroundColor: theme.colors.background,
  },
  quantityText: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: "#333",
    minWidth: 30,
    textAlign: "center",
    paddingHorizontal: 8,
  },
});
