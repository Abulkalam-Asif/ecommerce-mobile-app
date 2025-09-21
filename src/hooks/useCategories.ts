import { useQuery } from "@tanstack/react-query";
import categoryService from "../services/CategoryService";
import { queryKeys } from "../lib/react-query";

// Hook for fetching all categories
export function useCategories() {
  return useQuery({
    queryKey: [...queryKeys.categories],
    queryFn: () => categoryService.getCategories(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook for fetching a single category
export function useCategory(id: number) {
  return useQuery({
    queryKey: queryKeys.category(id),
    queryFn: () => categoryService.getCategory(id),
    enabled: !!id, // Only fetch if id is provided
  });
}

// Hook for fetching products in a category
export function useCategoryProducts(id: number) {
  return useQuery({
    queryKey: queryKeys.categoryProducts(id),
    queryFn: () => categoryService.getCategoryProducts(id),
    enabled: !!id,
  });
}
