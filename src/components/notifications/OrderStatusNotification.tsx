import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "@/src/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { OrderStatusUpdate } from "@/src/hooks/useOrderStatusUpdates";

interface OrderStatusNotificationProps {
  update: OrderStatusUpdate;
  onDismiss: () => void;
  onViewOrder?: () => void;
}

const OrderStatusNotification = ({
  update,
  onDismiss,
  onViewOrder,
}: OrderStatusNotificationProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return theme.colors.primary;
      case "shipped":
        return theme.colors.warning;
      case "delivered":
        return theme.colors.success;
      case "cancelled":
      case "refunded":
        return theme.colors.error;
      default:
        return theme.colors.text_secondary;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return "check-circle";
      case "shipped":
        return "truck";
      case "delivered":
        return "box-open";
      case "cancelled":
        return "times-circle";
      case "refunded":
        return "undo";
      default:
        return "info-circle";
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Your order has been confirmed!";
      case "shipped":
        return "Your order is on the way!";
      case "delivered":
        return "Your order has been delivered!";
      case "cancelled":
        return "Your order has been cancelled.";
      case "refunded":
        return "Your order has been refunded.";
      default:
        return `Order status updated to ${status}`;
    }
  };

  const statusColor = getStatusColor(update.newStatus);
  const statusIcon = getStatusIcon(update.newStatus);
  const statusMessage = getStatusMessage(update.newStatus);

  return (
    <Pressable style={styles.container} onPress={onViewOrder}>
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: statusColor + '20' }]}>
          <FontAwesome6
            name={statusIcon}
            size={18}
            color={statusColor}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Order Update</Text>
          <Text style={styles.message}>{statusMessage}</Text>
          <Text style={styles.orderId}>Order #{update.orderId.slice(-8)}</Text>
        </View>

        <Pressable onPress={onDismiss} style={styles.closeButton}>
          <FontAwesome6 name="times" size={14} color={theme.colors.text_secondary} />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.text,
  },
  message: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    lineHeight: 16,
  },
  orderId: {
    fontSize: 10,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_secondary,
  },
  closeButton: {
    padding: 4,
    marginLeft: 8,
  },
});

export default OrderStatusNotification;