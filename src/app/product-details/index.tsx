import React from "react";
import { tempProductDetails } from "@/temp/home/product-details/tempProductDetails";
import ProductDetailsContent from "@/src/components/product-details/ProductDetailsContent";

export default function ProductDetailsScreen() {
  // const { id } = useLocalSearchParams<{ id: string }>();

  // const { data: product, isLoading } = useProduct(Number(id));
  const product = tempProductDetails;

  return (
    <ProductDetailsContent
      product={product}
      // isLoading={isLoading}
      isLoading={false}
    />
  );
}
