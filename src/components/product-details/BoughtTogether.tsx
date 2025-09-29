import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";
import { useCategoryProducts } from "@/src/hooks/useCategories";
import ProductCard from "../tabs/home/ProductCard";

type Props = Record<string, never>;

const BoughtTogether = (props: Props) => {
  const { data: productsData } = useCategoryProducts(2);

  if (!productsData || productsData.Products.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boughtTogetherText}>Frequently bought together</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.scrollContent}>
        {productsData.Products.map((product) => (
          <ProductCard key={product.Id} product={product} insideModal={true} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BoughtTogether;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
  },
  boughtTogetherText: {
    fontSize: 16,
    fontFamily: theme.fonts.semi_bold,
  },
  scrollContent: {
    flexDirection: "row",
    gap: 16,
  },
});
