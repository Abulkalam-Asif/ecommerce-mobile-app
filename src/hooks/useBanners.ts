import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../lib/react-query";
import bannerService from "../services/BannerSerivce";

export function useSlideBanners() {
  return useQuery({
    queryKey: [...queryKeys.slideBanners],
    queryFn: () => bannerService.getSlideBanners(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
