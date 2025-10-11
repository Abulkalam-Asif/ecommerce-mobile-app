import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import GeneralTopBar from "@/src/components/general/GeneralTopBar";
import CartItem from "@/src/components/tabs/cart/CartItem";
import { tempCartItems } from "@/temp/home/products/tempCartItems";
import { theme } from "@/src/constants/theme";

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(tempCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.Id === id ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.Id !== id)
    );
  };

  return (
    <View style={styles.mainContainer}>
      <GeneralTopBar text="My Cart" />
      <View style={styles.infoContainer}>
        <Text style={styles.itemsCountText}>{cartItems.length} items</Text>
        <Pressable
          onPress={() => setCartItems([])}
          style={({ pressed }) => [pressed && styles.clearCartButtonPressed]}>
          <Text style={styles.clearCartText}>Clear All Items</Text>
        </Pressable>
      </View>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveItem}
          />
        )}
        keyExtractor={(item) => item.Id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.summaryContainer}>
        <View style={styles.minimumOrderRow}>
          <Text style={styles.minimumOrderText}>Minimum Order Price: </Text>
          <Text style={[styles.minimumOrderText, styles.minimumOrderValueText]}>
            1500
          </Text>
        </View>

        <View style={styles.amountRow}>
          <Text style={styles.amountLabel}>Amount</Text>
          <Text style={styles.amountValue}>Rs. 880</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.loginButton,
            pressed && styles.loginButtonPressed,
          ]}>
          <Text style={styles.loginButtonText}>Login /Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  itemsCountText: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
  },
  clearCartButtonPressed: {
    opacity: 0.6,
  },
  clearCartText: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: "red",
  },
  containerContent: {
    paddingBottom: 20,
  },

  summaryContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 110,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    gap: 4,
  },
  minimumOrderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  minimumOrderText: {
    fontSize: 10,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_secondary,
  },
  minimumOrderValueText: {
    fontFamily: theme.fonts.semibold,
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountLabel: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.text,
  },
  amountValue: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.secondary,
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: "#fff",
  },
  loginButtonPressed: {
    opacity: 0.8,
  },
});
