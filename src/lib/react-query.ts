import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache data for 5 minutes
      staleTime: 1000 * 60 * 5,
      // Keep data in cache for 10 minutes
      gcTime: 1000 * 60 * 10,
      // Retry failed requests 2 times
      retry: 2,
      // Retry delay with exponential backoff
      retryDelay: (attemptIndex: number) =>
        Math.min(1000 * 2 ** attemptIndex, 30000),
      // Don't refetch on window focus (mobile doesn't need this)
      refetchOnWindowFocus: false,
      // Refetch on reconnect is useful for mobile
      refetchOnReconnect: "always",
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
    },
  },
});

// Query keys factory for consistent key management
export const queryKeys = {
  categories: ["categories"] as const,
  category: (id: number) => ["categories", id] as const,
  categoryProducts: (id: number) => ["categories", id, "products"] as const,

  product: (id: number) => ["products", id] as const,

  slideBanners: ["slideBanners"] as const,
  mainBanner: ["mainBanner"] as const,
};
