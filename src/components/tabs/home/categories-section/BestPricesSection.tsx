import { StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";
import { theme } from "@/src/constants/theme";
import { Image } from "expo-image";
import { tempBestPrices } from "@/temp/home/bestPrices/tempBestPrices";

type BestPricesSectionProps = {};

const BestPricesSection = ({}: BestPricesSectionProps) => {
  const bestPricesData = tempBestPrices;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitleText}>Our Best Prices</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {bestPricesData.map((card) => {
          const discountPercentage = card.OldPrice
            ? Math.round(((card.OldPrice - card.Price) / card.OldPrice) * 100)
            : 0;
          return (
            <View key={card.Id} style={styles.card}>
              <Image
                key={card.Id}
                source={card.MainImageUrl}
                style={styles.image}
                contentFit="contain"
              />
              <Text style={styles.discountPercentageText}>
                {discountPercentage}% off
              </Text>
              {card.OldPrice && (
                <Text style={styles.discountText}>
                  Save Rs. {card.OldPrice - card.Price}
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BestPricesSection;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  sectionTitleText: {
    fontFamily: theme.fonts.semi_bold,
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 24,
  },
  scrollContent: {
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 20,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: theme.colors.background_2,
    width: 165,
    paddingVertical: 28,
    flexDirection: "column",
    gap: 12,
    position: "relative",
    overflow: "hidden",
  },
  discountPercentageText: {
    fontSize: 12,
    fontFamily: theme.fonts.semi_bold,
    position: "absolute",
    top: 12,
    left: -25,
    transform: [{ rotate: "-45deg" }],
    backgroundColor: theme.colors.primary,
    color: "#fff",
    paddingVertical: 2,
    width: 100,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  discountText: {
    fontSize: 12,
    fontFamily: theme.fonts.semi_bold,
  },
});
