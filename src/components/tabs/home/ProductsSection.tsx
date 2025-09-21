import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";
import ProductCard from "./ProductCard";
import { IProduct } from "@/src/hooks/useProducts";

type ProductsSectionProps = {
  sectionTitle: string;
  sectionTagline?: string;
  sectionBackgroundColor?: string;
  categoryIdForSeeAll?: number;
  products?: IProduct[];
};

const ProductsSection = ({
  sectionTitle,
  sectionTagline,
  sectionBackgroundColor,
  categoryIdForSeeAll,
  products,
}: ProductsSectionProps) => {
  return (
    <View
      style={[styles.container, { backgroundColor: sectionBackgroundColor }]}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{sectionTitle}</Text>
          {sectionTagline && (
            <Text style={styles.taglineText}>{sectionTagline}</Text>
          )}
        </View>
        {categoryIdForSeeAll && (
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {products &&
          products.length > 0 &&
          products?.map((product) => (
            <ProductCard key={product.Id} product={product} />
          ))}
      </ScrollView>
    </View>
  );
};

export default ProductsSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  headerContainer: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titleContainer: {
    marginBottom: 12,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary_darker,
  },
  taglineText: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  scrollContent: {
    flexDirection: "row",
    gap: 12,
  },
});
