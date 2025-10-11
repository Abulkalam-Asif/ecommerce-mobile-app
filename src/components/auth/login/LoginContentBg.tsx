import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const LoginContentBg = () => {
  return (
    <>
      <View style={[styles.container]}></View>
    </>
  );
};

export default LoginContentBg;

const styles = StyleSheet.create({
  container: {
    width: "110%",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "-5%",
    zIndex: -1,
    borderTopLeftRadius: width * 0.25,
    borderTopRightRadius: width * 0.25,
  },
});
