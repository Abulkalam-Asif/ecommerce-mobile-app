import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { convertEmulatorUrl, db } from "../../firebaseConfig";
import type { BannerMinimal } from "@/src/types";

const COLLECTION_NAME = "BANNERS";

const bannerService = {
  // =====================
  // CRUD Operations
  // =====================

  /**
   * Get all active homepage banners ordered by displayOrder
   * @returns Array of all banners
   */
  async getHomepageBanners(): Promise<BannerMinimal[]> {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where("bannerType", "==", "homepage"),
        where("isActive", "==", true),
        orderBy("displayOrder", "asc")
      );
      const querySnapshot = await getDocs(q);

      const banners: BannerMinimal[] = [];
      querySnapshot.forEach((doc) => {
        banners.push({
          imageUrl: convertEmulatorUrl(doc.data().imageUrl),
          linkType: doc.data().linkType,
          link: doc.data().link,
          displayOrder: doc.data().displayOrder,
        });
      });

      return banners;
    } catch (error) {
      console.error("Error fetching homepage banners:", error);
      throw error;
    }
  },

  /**
   * Get active popup banner
   * @returns Popup banner or null if none found
   */
  async getPopupBanner(): Promise<BannerMinimal | null> {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where("bannerType", "==", "popup"),
        where("isActive", "==", true),
        orderBy("displayOrder", "asc")
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return {
          imageUrl: convertEmulatorUrl(doc.data().imageUrl),
          linkType: doc.data().linkType,
          link: doc.data().link,
          displayOrder: doc.data().displayOrder,
        };
      }
      return null;
    } catch (error) {
      console.error("Error fetching active popup banner:", error);
      throw error;
    }
  },
};

export default bannerService;
