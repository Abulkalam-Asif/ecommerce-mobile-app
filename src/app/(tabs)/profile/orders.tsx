import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import GeneralTopBar from "@/src/components/general/GeneralTopBar";
import OrderTabs from "@/src/components/tabs/profile/orders/OrderTabs";
import OrderItem from "@/src/components/tabs/profile/orders/OrderItem";

type OrderTab = "all" | "completed" | "in-process" | "cancelled";

// Temporary order data
const tempOrders = [
  {
    id: "1",
    date: "15th December, 2024",
    itemCount: 2,
    price: 850,
    status: "in-process" as const,
  },
  {
    id: "2",
    date: "3rd November, 2024",
    itemCount: 1,
    price: 299,
    status: "completed" as const,
  },
  {
    id: "3",
    date: "28th October, 2024",
    itemCount: 5,
    price: 2150,
    status: "completed" as const,
  },
  {
    id: "4",
    date: "12th September, 2024",
    itemCount: 3,
    price: 675,
    status: "completed" as const,
  },
  {
    id: "5",
    date: "5th August, 2024",
    itemCount: 1,
    price: 199,
    status: "cancelled" as const,
  },
  {
    id: "6",
    date: "22nd July, 2024",
    itemCount: 7,
    price: 3420,
    status: "completed" as const,
  },
  {
    id: "7",
    date: "10th June, 2024",
    itemCount: 2,
    price: 540,
    status: "in-process" as const,
  },
  {
    id: "8",
    date: "30th May, 2024",
    itemCount: 4,
    price: 1280,
    status: "completed" as const,
  },
  {
    id: "9",
    date: "18th April, 2024",
    itemCount: 1,
    price: 299,
    status: "cancelled" as const,
  },
  {
    id: "10",
    date: "2nd March, 2024",
    itemCount: 3,
    price: 750,
    status: "in-process" as const,
  },
];

const OrdersScreen = () => {
  const [activeTab, setActiveTab] = useState<OrderTab>("all");

  const filteredOrders = tempOrders.filter((order) => {
    if (activeTab === "all") return true;
    return order.status === activeTab;
  });

  return (
    <View style={styles.container}>
      <GeneralTopBar text="Orders" />
      <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.containerContent}>
        {filteredOrders.map((order) => (
          <OrderItem
            key={order.id}
            orderId={order.id}
            date={order.date}
            itemCount={order.itemCount}
            price={order.price}
            status={order.status}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  containerContent: {
    paddingBottom: 100,
  },
});
