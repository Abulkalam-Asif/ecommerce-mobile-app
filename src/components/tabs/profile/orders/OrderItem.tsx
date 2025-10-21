import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

type OrderStatus = "in-process" | "completed" | "cancelled";

type OrderItemProps = {
  date: string;
  itemCount: number;
  price: number;
  status: OrderStatus;
  orderId: string;
};

const OrderItem = ({
  date,
  itemCount,
  price,
  status,
  orderId,
}: OrderItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "in-process":
        return {
          bg: theme.colors.warning_light,
          text: theme.colors.warning,
          icon: theme.colors.warning,
        };
      case "completed":
        return {
          bg: theme.colors.success_light,
          text: theme.colors.success,
          icon: theme.colors.success,
        };
      case "cancelled":
        return {
          bg: theme.colors.error_light,
          text: theme.colors.error,
          icon: theme.colors.error,
        };
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "in-process":
        return "In Process";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
    }
  };

  const colors = getStatusColor();

  const handlePress = () => {
    // Navigate to order details
    router.push(`/order-details?id=${orderId}` as any);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}>
      <View style={[styles.iconContainer, { backgroundColor: colors.bg }]}>
        <MaterialCommunityIcons
          name="cart-check"
          size={28}
          color={colors.icon}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.dateText}>{date}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.itemCountText}>{itemCount} items</Text>
          <Text style={styles.priceText}>Rs.{price}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        {status === "completed" && (
          <Text style={styles.reviewText}>Leave your Review</Text>
        )}
        <View style={[styles.statusBadge, { backgroundColor: colors.bg }]}>
          <Text style={[styles.statusText, { color: colors.text }]}>
            {getStatusText()}
          </Text>
        </View>
      </View>

      <FontAwesome6
        name="chevron-right"
        size={14}
        color={theme.colors.text_secondary}
      />
    </Pressable>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#fff",
    gap: 16,
  },
  containerPressed: {
    backgroundColor: theme.colors.background_3,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    gap: 4,
  },
  dateText: {
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.text,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  itemCountText: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_secondary,
  },
  priceText: {
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.secondary,
  },
  rightContainer: {
    alignItems: "flex-end",
    gap: 6,
  },
  reviewText: {
    fontSize: 8,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.secondary,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 8,
    fontFamily: theme.fonts.semibold,
  },
});
