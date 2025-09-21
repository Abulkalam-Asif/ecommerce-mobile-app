import { apiClient } from "../api";
import { ISlideBanner } from "../types/banner";

class BannerService {
  async getSlideBanners(): Promise<{
    Banners: ISlideBanner[];
    TotalCount: number;
    ActiveCount: number;
  }> {
    return apiClient.get(`/api/slide-promotion-banners`);
  }
}

const bannerService = new BannerService();
export default bannerService;
