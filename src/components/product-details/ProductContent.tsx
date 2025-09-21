import { ScrollView, Share, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { theme } from "@/src/constants/theme";
import { IProductDetails } from "@/src/types";
import AddToCartContainer from "./AddToCartContainer";
import IconButton from "../general/IconButton";
import { Entypo, Feather } from "@expo/vector-icons";

type ProductContentProps = {
  product: IProductDetails | undefined;
  isLoading: boolean;
};

const ProductContent = ({ product, isLoading }: ProductContentProps) => {
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {isLoading ? (
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}>
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading product...</Text>
            </View>
          </ScrollView>
        ) : !product ? (
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}>
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Product not found</Text>
            </View>
          </ScrollView>
        ) : (
          <>
            <ScrollView
              style={styles.content}
              showsVerticalScrollIndicator={false}>
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
              </View>

              {/* Stock Info */}
              {product.StockInfo && (
                <Text
                  style={[
                    styles.stockText,
                    {
                      color: product.StockInfo.InStock ? "#4CAF50" : "#F44336",
                    },
                  ]}>
                  {product.StockInfo.StockAvailability}
                </Text>
              )}
            </ScrollView>
            <AddToCartContainer
              quantityInCart={quantityInCart}
              setQuantityInCart={setQuantityInCart}
              price={product.Price}
            />
          </>
        )}
      </View>
    </>
  );
};

export default ProductContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
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
  },

  stockText: {
    fontSize: 14,
    marginBottom: 16,
    fontFamily: theme.fonts.medium,
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
