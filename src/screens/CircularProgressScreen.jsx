import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BLUE_COLOR } from "../utils/contants";

export const CircularProgressScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE_COLOR,
  },
});
