import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { theme } from "@/src/constants/theme";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";

const ProfileTopSection = () => {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const uploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setScreenshot(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageWrapper}>
          {screenshot ? (
            <Image
              source={screenshot}
              style={styles.profileImage}
              contentFit="cover"
            />
          ) : (
            <Image
              source={require("@/src/assets/profile-image-placeholder.png")}
              style={styles.profileImage}
              contentFit="cover"
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.editIconButton}
          onPress={uploadImage}
          activeOpacity={0.8}>
          <Feather name="edit-2" size={16} color={theme.colors.secondary} />
        </TouchableOpacity>
      </View>

      <Text style={styles.userName}>Mian Ali Husnain</Text>
      <Text style={styles.phoneNumber}>03021118453</Text>
    </View>
  );
};

export default ProfileTopSection;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  profileImageWrapper: {
    width: 110,
    height: 110,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  editIconButton: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  userName: {
    fontFamily: theme.fonts.semibold,
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 2,
  },
  phoneNumber: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.text,
  },
});
