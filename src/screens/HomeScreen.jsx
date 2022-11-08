import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import { BLUE, BLUE_COLOR } from "../utils/contants";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <NavButton text='List Animation' screen='FlatListAnimationScreen' />
      <NavButton
        text='Circular Progress Animation'
        screen='CircularProgressScreen'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BLUE_COLOR,
  },
  image: {
    width: WIDTH / 2,
    height: WIDTH / 2,
    position: "absolute",
    top: 60,
  },
});
