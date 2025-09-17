import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { tempCategories } from "@/temp/home/categories/categories";
import { theme } from "@/src/constants/theme";

const CategoriesSection = () => {
  // Split categories into chunks of 2 for each column
  const getColumnsFromCategories = () => {
    const columns = [];
    for (let i = 0; i < tempCategories.length; i += 2) {
      columns.push(tempCategories.slice(i, i + 2));
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
                key={category.id}
                imageSource={category.imageSource}
                text={category.text}
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
