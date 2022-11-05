import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";

const WIDTH = Dimensions.get("window").width;

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />

      <NavButton text='Flat List Animation' screen='FlatListAnimationScreen' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#272727",
  },
  image: {
    width: WIDTH / 2,
    height: WIDTH / 2,
    position: "absolute",
    top: 100,
  },
});
