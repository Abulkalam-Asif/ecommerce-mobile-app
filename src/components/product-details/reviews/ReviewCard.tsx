import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IReview } from "@/src/types/review";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/build/Entypo";
import { theme } from "@/src/constants/theme";

type ReviewCardProps = {
  review: IReview;
};

const ReviewCard = (ReviewCardprops: ReviewCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={
            "https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg"
          }
          style={styles.image}
        />
        <View>
          <Text style={styles.customerNameText}>
            {ReviewCardprops.review.CustomerName}
          </Text>
          <Text style={styles.reviewDateText}>
            {ReviewCardprops.review.CreatedOnUtc}
          </Text>
        </View>
        <View style={styles.rating}>
          {Array.from({ length: ReviewCardprops.review.Rating }, (_, i) => (
            <Entypo key={i} name="star" size={18} color={"#FFBB22"} />
          ))}
        </View>
        <Text style={styles.ratingText}>{ReviewCardprops.review.Rating}</Text>
      </View>
      <Text style={styles.reviewText}>{ReviewCardprops.review.ReviewText}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background_3,
    padding: 16,
    borderRadius: 8,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  customerNameText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 14,
  },
  reviewDateText: {
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
  },
  reviewText: {
    marginVertical: 4,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    color: "#f39c12",
    flex: 1,
    justifyContent: "flex-end",
  },
  ratingText: {
    marginLeft: 4,
    fontFamily: theme.fonts.medium,
  },
});
