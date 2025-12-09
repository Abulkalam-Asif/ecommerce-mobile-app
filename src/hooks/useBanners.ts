import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../lib/react-query";
import bannerService from "../services/bannerService";

// Hook for fetching popup banner
export function useGetPopupBanner() {
  return useQuery({
    queryKey: queryKeys.banners.popup,
    queryFn: () => bannerService.getPopupBanner(),
    staleTime: 1000 * 60 * 30, // 30 minutes - popup banners change infrequently
    gcTime: 1000 * 60 * 60, // 1 hour - keep in cache longer
    refetchOnMount: false, // Don't refetch on every component mount
    refetchOnWindowFocus: false, // Not needed for mobile apps
    refetchOnReconnect: true, // Check for new banners when network reconnects
    retry: 2, // Retry failed requests twice before giving up
  });
}

// Hook for fetching homepage banners
export function useGetHomepageBanners() {
  return useQuery({
    queryKey: queryKeys.banners.homepage,
    queryFn: () => bannerService.getHomepageBanners(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
