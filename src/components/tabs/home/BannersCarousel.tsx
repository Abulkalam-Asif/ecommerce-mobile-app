import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { CONSTANTS } from "@/src/constants/contants";
import { useSlideBanners } from "@/src/hooks/useBanners";
import { ISlideBanner } from "@/src/types/banner";

const width = Dimensions.get("window").width;

const BannersCarousel = () => {
  const { data: bannersData, isLoading: loadingBannersData } =
    useSlideBanners();

  if (loadingBannersData) {
    return <Text>Loading banners...</Text>;
  }

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={width / CONSTANTS.home_banner_ratio}
        autoPlay={true}
        autoPlayInterval={5000}
        data={bannersData?.Banners || []}
        renderItem={({ item }: { item: ISlideBanner }) => (
          <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8}>
            <Image source={item.PictureUrl} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BannersCarousel;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  imageContainer: {
    paddingHorizontal: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
});
