import React, { useState, useEffect } from "react";
import { StyleSheet, View, Modal, Dimensions, Pressable } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useGetPopupBanner } from "@/src/hooks/useBanners";
import { router } from "expo-router";
import bannerService from "@/src/services/bannerService";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const PopupBanner = () => {
  const { data: popupBanner, isLoading } = useGetPopupBanner();
  const [isVisible, setIsVisible] = useState(false);
  const [hasCheckedBanner, setHasCheckedBanner] = useState(false);

  // Check if this is a new banner when data is loaded
  useEffect(() => {
    const checkAndShowBanner = async () => {
      if (!popupBanner || hasCheckedBanner) {
        return;
      }

      // Check if this is a new banner
      const shouldShow = await bannerService.isNewPopupBanner(popupBanner.id);

      if (shouldShow) {
        // Store the banner ID immediately to prevent showing it again
        await bannerService.storePopupBannerId(popupBanner.id);
        setIsVisible(true);
      }

      setHasCheckedBanner(true);
    };

    checkAndShowBanner();
  }, [popupBanner, hasCheckedBanner]);

  // Don't show if loading, no data, or not visible
  if (isLoading || !popupBanner || !isVisible) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBannerPress = () => {
    // Close modal first before navigation
    setIsVisible(false);

    if (popupBanner.linkType === "product") {
      router.push(`/product-details?id=${popupBanner.link}`);
    } else if (popupBanner.linkType === "category") {
      router.push(`/categories?categoryId=${popupBanner.link}`);
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}>
      <Pressable style={styles.overlay} onPress={handleClose}>
        <View style={styles.bannerContainer}>
          {/* Close Button */}
          <Pressable style={styles.closeButton} onPress={handleClose}>
            <Ionicons name="close" size={24} color="#fff" />
          </Pressable>

          {/* Banner Image */}
          <Pressable onPress={handleBannerPress} style={styles.imageContainer}>
            <Image
              source={popupBanner.imageUrl}
              style={styles.bannerImage}
              contentFit="contain"
            />
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default PopupBanner;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  bannerContainer: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    maxWidth: SCREEN_WIDTH * 0.9,
    maxHeight: SCREEN_HEIGHT * 0.7,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 2,
  },
  imageContainer: {
    width: "100%",
  },
  bannerImage: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9 * 0.75, // 4:3 aspect ratio
    minHeight: 200,
  },
});
