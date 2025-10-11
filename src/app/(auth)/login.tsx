import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { theme } from "@/src/constants/theme";
import { Image } from "expo-image";
import LoginContentBg from "@/src/components/auth/login/LoginContentBg";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOTP = () => {
    // Handle OTP sending logic here
    console.log("Sending OTP to:", phoneNumber);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}>
      <View style={styles.headerContainer}>
        <Image
          source={require("@/src/assets/logo.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.mainContent}>
        <LoginContentBg />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitleText}>
            Welcome to Apna Online Store
          </Text>
          <Text style={styles.welcomeSubtitle}>Login or Create Account</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          {/* Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Enter your Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor={theme.colors.placeholder}
            />
          </View>

          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Enter your Mobile Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="03000000000"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={11}
              placeholderTextColor={theme.colors.placeholder}
            />
          </View>

          {/* Send OTP Button */}
          <Pressable
            style={({ pressed }) => [
              styles.sendOTPButton,
              pressed && styles.sendOTPButtonPressed,
            ]}
            onPress={handleSendOTP}>
            <Text style={styles.sendOTPButtonText}>Send OTP</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  containerContent: {
    flexGrow: 1,
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  logoImage: {
    width: 200,
    height: 75,
    borderRadius: 16,
  },

  mainContent: {
    flex: 1,
    position: "relative",
  },
  welcomeContainer: {
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  welcomeTitleText: {
    fontSize: 18,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    textAlign: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    gap: 24,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_secondary,
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.background,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  sendOTPButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  sendOTPButtonPressed: {
    opacity: 0.8,
  },
  sendOTPButtonText: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: "#fff",
  },
});
