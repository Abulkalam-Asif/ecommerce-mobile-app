import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { theme } from "@/src/constants/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { useSinglePress } from "@/src/hooks/useSinglePress";
import { router } from "expo-router";

type AccountSettingsButtonProps = {
  text: string;
  href: string;
  imageSrc: number;
};

const AccountSettingsButton = ({
  text,
  href,
  imageSrc,
}: AccountSettingsButtonProps) => {
  const canPress = useSinglePress();

  const pressHandler = () => {
    if (!canPress()) return;
    router.push(href as any);
  };

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.image} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <FontAwesome6
        name="chevron-right"
        size={16}
        color={theme.colors.text}
        style={styles.icon}
      />
    </Pressable>
  );
};

export default AccountSettingsButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: theme.colors.background_3,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  imageContainer: {
    width: 30,
    height: 30,
    backgroundColor: theme.colors.primary_light,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 16,
    height: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  icon: {
    marginLeft: "auto",
    marginRight: 8,
  },
});
