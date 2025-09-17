import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import BannersCarousel from "@/src/components/tabs/home/BannersCarousel";
import HomeSearchBar from "@/src/components/tabs/home/HomeSearchBar";
import CategoriesSection from "@/src/components/tabs/home/categories-section/CategoriesSection";
import ProductsSection from "@/src/components/tabs/home/ProductsSection";
import { tempProducts } from "@/temp/home/products/products";
import { theme } from "@/src/constants/theme";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeSearchBar />
      <BannersCarousel />
      <CategoriesSection />
      <ProductsSection
        sectionTitle="Summer Special"
        sectionTagline="Cool deals for hot days 🔥"
        sectionBackgroundColor={theme.colors.secondary_bg_1}
        categoryIdForSeeAll="summer-special"
        products={tempProducts.filter(
          (product) => product.categoryId === "summer-special"
        )}
      />
      <ProductsSection
        sectionTitle="Snack time faviorites 🍪"
        sectionTagline="Biscuits, chocolates, nimko & more"
        sectionBackgroundColor={theme.colors.secondary_bg_2}
        categoryIdForSeeAll="snack-time-favorites"
        products={tempProducts.filter(
          (product) => product.categoryId === "snack-time-favorites"
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
