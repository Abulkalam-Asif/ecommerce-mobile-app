import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../lib/react-query";
import bannerService from "../services/BannerSerivce";

export function useActiveSlideBanners() {
  return useQuery({
    queryKey: [...queryKeys.slideBanners],
    queryFn: () => bannerService.getActiveSlideBanners(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useMainBanner() {
  return useQuery({
    queryKey: [...queryKeys.mainBanner],
    queryFn: () => bannerService.getMainBanner(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
