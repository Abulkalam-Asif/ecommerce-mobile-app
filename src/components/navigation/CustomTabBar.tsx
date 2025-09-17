import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "@/src/constants/theme";

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const handleQuickOrder = () => {
    // Handle WhatsApp quick order
    const phoneNumber = "+923207303810"; // Replace with your WhatsApp business number
    const message = "Hi! I'd like to place a quick order.";
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          // Fallback to web WhatsApp
          const webUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`;
          return Linking.openURL(webUrl);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const getTabIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? theme.colors.primary : "#666";
    const size = 24;

    switch (routeName) {
      case "home":
        return <MaterialIcons name="home" size={size} color={color} />;
      case "categories":
        return <MaterialIcons name="category" size={size} color={color} />;
      case "cart":
        return <MaterialIcons name="shopping-cart" size={size} color={color} />;
      case "account":
        return (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        );
      default:
        return <MaterialIcons name="home" size={size} color={color} />;
    }
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        // Skip the quick-order route in normal tab rendering
        if (route.name === "quick-order") {
          return (
            <Pressable
              key={route.key}
              style={styles.quickOrderButton}
              onPress={handleQuickOrder}>
              <View style={styles.quickOrderIconContainer}>
                <MaterialCommunityIcons
                  name="whatsapp"
                  size={28}
                  color="white"
                />
              </View>
              <Text style={styles.quickOrderLabel}>Quick Order</Text>
            </Pressable>
          );
        }

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tabItem}>
            {getTabIcon(route.name, isFocused)}
            <Text
              style={[
                styles.tabLabel,
                { color: isFocused ? theme.colors.primary : "#666" },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 80,
    paddingBottom: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: theme.fonts.regular,
  },
  quickOrderButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  quickOrderIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    elevation: 4,
  },
  quickOrderLabel: {
    fontSize: 12,
    color: theme.colors.primary,
    marginTop: 30,
    fontFamily: theme.fonts.regular,
  },
});

export default CustomTabBar;
