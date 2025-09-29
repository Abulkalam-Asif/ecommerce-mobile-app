import { ScrollView, Share, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { theme } from "@/src/constants/theme";
import { IProductDetails } from "@/src/types";
import AddToCartContainer from "./AddToCartContainer";
import IconButton from "../general/IconButton";
import { Entypo, Feather } from "@expo/vector-icons";
import BoughtTogether from "./BoughtTogether";
import SimilarItems from "./SimilarItems";

type ProductContentProps = {
  product: IProductDetails | undefined;
  isLoading: boolean;
};

const ProductContent = ({ product, isLoading }: ProductContentProps) => {
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShowMoreDescription, setIsShowMoreDescription] = useState(false);

  return (
    <>
      {isLoading ? (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading product...</Text>
          </View>
        </ScrollView>
      ) : !product ? (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Product not found</Text>
          </View>
        </ScrollView>
      ) : (
        <>
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}>
              
            <View style={styles.topContentContainer}>
              {/* Product Image */}
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri:
                      product.MainImageUrl ||
                      product.ThumbnailUrl ||
                      product.Images[0]?.ImageUrl,
                  }}
                  style={styles.productImage}
                />
              </View>

              {/* Product Name Section */}
              <View style={styles.productNameSection}>
                <Text
                  style={styles.productNameText}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {/* Product name here Product name here Product name here */}
                  {product.Name}
                </Text>
                <IconButton
                  icon={
                    <Entypo
                      name={isFavorite ? "heart" : "heart-outlined"}
                      size={24}
                      color={isFavorite ? "red" : "black"}
                    />
                  }
                  onPress={() => setIsFavorite(!isFavorite)}
                />
                <IconButton
                  icon={<Feather name="share-2" size={22} />}
                  onPress={() => {
                    Share.share({
                      message: `Check out this product: ${product.Name}`,
                      url: product.MainImageUrl,
                    });
                  }}
                />
              </View>

              {/* Price Section */}
              <View style={styles.priceSection}>
                <Text style={styles.rs}>Rs.</Text>
                <Text style={styles.currentPriceText}> {product.Price}</Text>
                <Text style={styles.oldPriceText}>Rs. {product.OldPrice}</Text>
                <Text style={styles.discountTag}>
                  Rs.{" "}
                  {product.OldPrice - product.Price > 0
                    ? product.OldPrice - product.Price
                    : 0}{" "}
                  off
                </Text>
                {/* Stock Info */}
                {product.StockInfo && (
                  <Text
                    style={[
                      styles.stockText,
                      {
                        color: product.StockInfo.InStock
                          ? theme.colors.primary
                          : "red",
                      },
                    ]}>
                    {product.StockInfo.StockAvailability}
                  </Text>
                )}
              </View>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.aboutProductText}>About this product</Text>
              <Text style={styles.descriptionText}>
                {isShowMoreDescription ? (
                  <>
                    {product.ShortDescription}
                    <Text
                      style={styles.showLessMoreText}
                      onPress={() => setIsShowMoreDescription(false)}>
                      {" Show Less"}
                    </Text>
                  </>
                ) : (
                  <>
                    {product.ShortDescription.length > 100
                      ? product.ShortDescription.substring(0, 100) + "... "
                      : product.ShortDescription}
                    {product.ShortDescription.length > 100 && (
                      <Text
                        style={styles.showLessMoreText}
                        onPress={() => setIsShowMoreDescription(true)}>
                        Show More
                      </Text>
                    )}
                  </>
                )}
              </Text>
            </View>

            <BoughtTogether />
            <SimilarItems />
          </ScrollView>
          <AddToCartContainer
            quantityInCart={quantityInCart}
            setQuantityInCart={setQuantityInCart}
            price={product.Price}
          />
        </>
      )}
    </>
  );
};

export default ProductContent;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  
  topContentContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    position: "relative",
  },
  productImage: {
    width: 200,
    height: 200,
  },

  productNameSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  productNameText: {
    fontSize: 18,
    color: theme.colors.text,
    fontFamily: theme.fonts.semi_bold,
    flex: 1,
  },

  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rs: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_secondary,
  },
  currentPriceText: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    marginRight: 8,
  },
  oldPriceText: {
    fontSize: 16,
    color: theme.colors.text_secondary,
    textDecorationLine: "line-through",
    fontFamily: theme.fonts.regular,
    marginRight: 8,
  },
  discountTag: {
    backgroundColor: theme.colors.primary,
    fontSize: 12,
    lineHeight: 16,
    color: "#fff",
    fontFamily: theme.fonts.medium,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 8,
  },
  stockText: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    flex: 1,
    textAlign: "right",
  },

  descriptionContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
  },
  aboutProductText: {
    fontSize: 16,
    fontFamily: theme.fonts.semi_bold,
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.regular,
  },
  showLessMoreText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.semi_bold,
  },

  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  loadingText: {
    fontSize: 16,
    color: "#666",
    fontFamily: theme.fonts.medium,
  },
});
