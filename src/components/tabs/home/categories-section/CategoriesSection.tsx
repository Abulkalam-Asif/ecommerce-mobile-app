import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard, { CategoryCardLoading } from "./CategoryCard";
import { ICategory } from "@/src/types";

type CategoriesSectionProps = {
  categories: ICategory[] | undefined;
  loadingCategories: boolean;
};

const CategoriesSection = ({
  categories,
  loadingCategories,
}: CategoriesSectionProps) => {
  if (loadingCategories) {
    return (
      <View style={styles.container}>
        {Array.from({ length: 2 }).map((_, index) => (
          <View key={index} style={styles.scrollContent}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <CategoryCardLoading key={idx} />
            ))}
          </View>
        ))}
      </View>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No categories found. Data: {JSON.stringify(categories)}</Text>
      </View>
    );
  }

  const getColumnsFromCategories = () => {
    const columns = [];
    for (let i = 0; i < categories.length; i += 2) {
      columns.push(categories.slice(i, i + 2));
    }
    return columns;
  };

  const categoryColumns = getColumnsFromCategories();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {categoryColumns.map((column, columnIndex) => (
          <View key={columnIndex} style={styles.column}>
            {column.map((category) => (
              <CategoryCard
                key={category.Id}
                imageSource={category.PictureUrl}
                name={category.Name}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  scrollContent: {
    flexDirection: "row",
    gap: 20,
  },
  column: {
    flexDirection: "column",
    gap: 20,
  },
});
