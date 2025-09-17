import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { CONSTANTS } from "@/src/constants/contants";

const images = [
  require("@/temp/home/banners/banner1.webp"),
  require("@/temp/home/banners/banner2.webp"),
  require("@/temp/home/banners/banner3.webp"),
  require("@/temp/home/banners/banner4.webp"),
];

const width = Dimensions.get("window").width;

const BannersCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={width / CONSTANTS.home_banner_ratio}
        autoPlay={true}
        autoPlayInterval={5000}
        data={images}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8}>
            <Image source={item} style={styles.image} />
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
