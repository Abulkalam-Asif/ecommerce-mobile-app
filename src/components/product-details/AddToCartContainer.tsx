import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";

type AddToCartContainerProps = {
  quantityInCart: number;
  setQuantityInCart: (quantity: number) => void;
  price: number;
};

const AddToCartContainer = ({
  quantityInCart,
  setQuantityInCart,
  price,
}: AddToCartContainerProps) => {
  return (
    <View style={styles.container}>
      {quantityInCart > 0 && (
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>Amount</Text>
          <Text style={styles.amountValueText}>
            Rs. {price * quantityInCart}
          </Text>
        </View>
      )}

      <View style={styles.quantityCartContainer}>
        {quantityInCart > 0 && (
          <View style={styles.setQuantityView}>
            <Pressable
              style={({ pressed }) => [
                styles.changeQuantityButton,
                pressed && styles.changeQuantityButtonPressed,
              ]}
              onPress={() =>
                setQuantityInCart(quantityInCart > 0 ? quantityInCart - 1 : 0)
              }>
              <FontAwesome6 name="minus" size={16} color="#000" />
            </Pressable>
            <Text style={styles.quantityText}>{quantityInCart}</Text>
            <Pressable
              style={({ pressed }) => [
                styles.changeQuantityButton,
                pressed && styles.changeQuantityButtonPressed,
              ]}
              onPress={() => setQuantityInCart(quantityInCart + 1)}>
              <FontAwesome6 name="plus" size={16} color="#000" />
            </Pressable>
          </View>
        )}

        <Pressable
          style={styles.addToCartButton}
          onPress={() => {
            if (quantityInCart === 0) {
              setQuantityInCart(1);
            } else {
              // Navigate to cart screen logic here
            }
          }}>
          <Text style={styles.addToCartText}>
            {quantityInCart === 0 ? "Add to Cart" : "View Cart"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddToCartContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0px -4px 6px 0 rgba(0, 0, 0, 0.1)",
    gap: 8,
  },

  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  amountText: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
  },
  amountValueText: {
    fontSize: 16,
    fontFamily: theme.fonts.semi_bold,
    color: theme.colors.primary,
  },

  quantityCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  setQuantityView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    flex: 1,
  },
  changeQuantityButton: {
    padding: 16,
    borderRadius: 10,
  },
  changeQuantityButtonPressed: {
    backgroundColor: "#eee",
  },
  quantityText: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
  },

  addToCartButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
  },
  addToCartText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: theme.fonts.medium,
    fontSize: 16,
  },
});
