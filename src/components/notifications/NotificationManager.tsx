import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";
import { useOrderStatusUpdates } from "@/src/hooks/useOrderStatusUpdates";
import OrderStatusNotification from "./OrderStatusNotification";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/src/lib/react-query";
import { router } from "expo-router";

const { width: screenWidth } = Dimensions.get("window");

const NotificationManager = () => {
  const mockCustomerId = "customer123"; // In real app, get from auth context
  const { statusUpdates, clearUpdates } = useOrderStatusUpdates(mockCustomerId);
  const queryClient = useQueryClient();
  const autoDismissTimers = useRef<Record<string, number>>({});

  // Auto-dismiss notifications after 8 seconds and invalidate queries
  useEffect(() => {
    if (statusUpdates.length > 0) {
      // Invalidate orders query to refresh the orders page
      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.lists(),
      });
    }

    statusUpdates.forEach((update) => {
      const key = `${update.orderId}-${update.timestamp.getTime()}`;

      // Clear existing timer if any
      if (autoDismissTimers.current[key]) {
        clearTimeout(autoDismissTimers.current[key]);
      }

      // Set new auto-dismiss timer
      autoDismissTimers.current[key] = setTimeout(() => {
        clearUpdates();
        delete autoDismissTimers.current[key];
      }, 8000); // 8 seconds
    });

    // Cleanup timers on unmount
    return () => {
      Object.values(autoDismissTimers.current).forEach((timer) =>
        clearTimeout(timer)
      );
      autoDismissTimers.current = {};
    };
  }, [statusUpdates, clearUpdates, queryClient]);

  const handleDismissNotification = (updateId: string) => {
    // Clear auto-dismiss timer for this notification
    const key = `${updateId}-${statusUpdates
      .find((u) => u.orderId === updateId)
      ?.timestamp.getTime()}`;
    if (autoDismissTimers.current[key]) {
      clearTimeout(autoDismissTimers.current[key]);
      delete autoDismissTimers.current[key];
    }

    clearUpdates();
  };

  const handleViewOrder = (orderId: string) => {
    // Clear all timers when navigating
    Object.values(autoDismissTimers.current).forEach((timer) =>
      clearTimeout(timer)
    );
    autoDismissTimers.current = {};

    clearUpdates();
    router.push(`/order-details?id=${orderId}` as any);
  };

  if (statusUpdates.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {statusUpdates.map((update) => (
        <SwipeableNotification
          key={`${update.orderId}-${update.timestamp.getTime()}`}
          update={update}
          onDismiss={() => handleDismissNotification(update.orderId)}
          onViewOrder={() => handleViewOrder(update.orderId)}
        />
      ))}
    </View>
  );
};

// Swipeable notification wrapper
const SwipeableNotification = ({ update, onDismiss, onViewOrder }: any) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 20;
      },
      onPanResponderMove: (evt, gestureState) => {
        translateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) > screenWidth * 0.3) {
          // Swipe far enough, dismiss
          Animated.parallel([
            Animated.timing(translateX, {
              toValue: gestureState.dx > 0 ? screenWidth : -screenWidth,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
          ]).start(() => {
            onDismiss();
          });
        } else {
          // Return to original position
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  );

  return (
    <Animated.View
      style={[
        styles.notificationWrapper,
        {
          transform: [{ translateX }],
          opacity,
        },
      ]}
      {...panResponder.current.panHandlers}>
      <OrderStatusNotification
        update={update}
        onDismiss={onDismiss}
        onViewOrder={onViewOrder}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingHorizontal: 16,
  },
  notificationWrapper: {
    marginBottom: 8,
  },
});

export default NotificationManager;
