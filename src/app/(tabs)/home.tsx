import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import BannersCarousel from "@/src/components/tabs/home/BannersCarousel";
import HomeSearchBar from "@/src/components/tabs/home/HomeSearchBar";
import CategoriesSection from "@/src/components/tabs/home/categories-section/CategoriesSection";
import ProductsSection from "@/src/components/tabs/home/ProductsSection";
import { theme } from "@/src/constants/theme";
import { useCategories, useCategoryProducts } from "@/src/hooks/useCategories";

const HomeScreen = () => {
  const { data: categories, isLoading: loadingCategories } = useCategories();
  const { data: categoryProductsData, isLoading: loadingCategoryProducts } =
    useCategoryProducts(3);

  if (!categoryProductsData || loadingCategories || loadingCategoryProducts) {
    return <></>;
  }
  return (
    <ScrollView style={styles.container}>
      <HomeSearchBar />
      <BannersCarousel />
      <CategoriesSection
        categories={categories}
        loadingCategories={loadingCategories}
      />
      <ProductsSection
        sectionTitle={categoryProductsData.Category.Name}
        sectionTagline={categoryProductsData.Category.Description}
        categoryIdForSeeAll={categoryProductsData.Category.Id}
        products={categoryProductsData.Products}
        sectionBackgroundColor={theme.colors.secondary_bg_2}
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
