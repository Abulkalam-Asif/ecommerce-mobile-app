import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";

type OrderTab = "all" | "completed" | "in-process" | "cancelled";

type OrderTabsProps = {
  activeTab: OrderTab;
  onTabChange: (tab: OrderTab) => void;
};

const OrderTabs = ({ activeTab, onTabChange }: OrderTabsProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onTabChange("all")} style={styles.tabButton}>
        <Text
          style={[styles.tabText, activeTab === "all" && styles.tabTextActive]}>
          All Orders
        </Text>
        {activeTab === "all" && (
          <View
            style={[
              styles.activeIndicator,
              {
                backgroundColor: theme.colors.text,
              },
            ]}
          />
        )}
      </Pressable>

      <Pressable
        onPress={() => onTabChange("completed")}
        style={styles.tabButton}>
        <Text
          style={[
            styles.tabText,
            {
              color: theme.colors.success,
            },
            activeTab === "completed" && styles.tabTextActive,
          ]}>
          Completed
        </Text>
        {activeTab === "completed" && (
          <View
            style={[
              styles.activeIndicator,
              {
                backgroundColor: theme.colors.success,
              },
            ]}
          />
        )}
      </Pressable>

      <Pressable
        onPress={() => onTabChange("in-process")}
        style={styles.tabButton}>
        <Text
          style={[
            styles.tabText,
            { color: theme.colors.warning },
            activeTab === "in-process" && styles.tabTextActive,
          ]}>
          In Process
        </Text>
        {activeTab === "in-process" && (
          <View
            style={[
              styles.activeIndicator,
              {
                backgroundColor: theme.colors.warning,
              },
            ]}
          />
        )}
      </Pressable>

      <Pressable
        onPress={() => onTabChange("cancelled")}
        style={styles.tabButton}>
        <Text
          style={[
            styles.tabText,
            { color: theme.colors.error },
            activeTab === "cancelled" && styles.tabTextActive,
          ]}>
          Cancelled
        </Text>
        {activeTab === "cancelled" && (
          <View
            style={[
              styles.activeIndicator,
              {
                backgroundColor: theme.colors.error,
              },
            ]}
          />
        )}
      </Pressable>
    </View>
  );
};

export default OrderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tabButton: {
    paddingBottom: 2,
    position: "relative",
  },
  tabText: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },
  tabTextActive: {
    fontFamily: theme.fonts.semibold,
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
  },
});
