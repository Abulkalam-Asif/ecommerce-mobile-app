import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { convertEmulatorUrl, db } from "../../firebaseConfig";
import type { BannerMinimal } from "@/src/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const COLLECTION_NAME = "BANNERS";
const POPUP_BANNER_ID_KEY = "@current_popup_banner_id";

// =====================
// AsyncStorage Helpers
// =====================

/**
 * Get the currently stored popup banner ID
 * Returns null if no ID is stored or if there's an error
 */
const getStoredPopupBannerId = async (): Promise<string | null> => {
  try {
    const storedId = await AsyncStorage.getItem(POPUP_BANNER_ID_KEY);
    return storedId;
  } catch (error) {
    console.error("Error reading popup banner ID from storage:", error);
    return null;
  }
};

/**
 * Store the popup banner ID
 * Returns true if successful, false otherwise
 */
const storePopupBannerId = async (bannerId: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(POPUP_BANNER_ID_KEY, bannerId);
    return true;
  } catch (error) {
    console.error("Error storing popup banner ID:", error);
    return false;
  }
};

/**
 * Check if the given banner ID is different from the stored one
 * Returns true if it's a new banner (should be shown)
 */
const isNewPopupBanner = async (bannerId: string): Promise<boolean> => {
  try {
    const storedId = await getStoredPopupBannerId();
    // If no stored ID, it's a new banner
    if (!storedId) {
      return true;
    }
    // Compare IDs
    return storedId !== bannerId;
  } catch (error) {
    console.error("Error checking if popup banner is new:", error);
    // On error, don't show banner to avoid annoying user
    return false;
  }
};

const bannerService = {
  // =====================
  // Popup Banner Tracking
  // =====================

  /**
   * Check if the given banner ID is different from the stored one
   * @param bannerId - Banner ID to check
   * @returns true if it's a new banner (should be shown)
   */
  isNewPopupBanner,

  /**
   * Store the popup banner ID in AsyncStorage
   * @param bannerId - Banner ID to store
   * @returns true if successful, false otherwise
   */
  storePopupBannerId,

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
          id: doc.id,
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
          id: doc.id,
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
