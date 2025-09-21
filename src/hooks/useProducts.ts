import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../lib/react-query";
import productService from "../services/ProductService";

// Hook for fetching a single product
export function useProduct(id: number) {
  return useQuery({
    queryKey: queryKeys.product(id),
    queryFn: () => productService.getProduct(id),
    enabled: !!id,
  });
}
