import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ReviewsTopBar from "@/src/components/product-details/reviews/ReviewsTopBar";
import { tempReviews } from "@/temp/home/product-details/tempReviews";
import ReviewCard from "@/src/components/product-details/reviews/ReviewCard";

export default function ReviewsScreen() {
  // const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.containerContent}
      data={tempReviews}
      renderItem={({ item }) => <ReviewCard review={item} />}
      keyExtractor={(item) => item.Id.toString()}
      ListHeaderComponent={<ReviewsTopBar />}
      StickyHeaderComponent={ReviewsTopBar}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerContent: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    gap: 16,
  },
});
