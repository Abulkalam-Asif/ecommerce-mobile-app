import { apiClient } from "../api/client";
import { IBanner } from "../types/banner";

class BannerService {
  async getActiveSlideBanners(): Promise<IBanner[]> {
    return apiClient.get(`/api/slide-promotion-banners/active`);
  }
  async getMainBanner(): Promise<IBanner> {
    return apiClient.get(`/api/slide-promotion-banners/main`);
  }
}

const bannerService = new BannerService();
export default bannerService;
