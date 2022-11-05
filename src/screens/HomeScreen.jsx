import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
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
    width: WIDTH / 4,
    height: WIDTH / 4,
    position: "absolute",
    top: 40,
    left: 40,
  },
});
