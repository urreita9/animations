import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ColorSelection } from "../components/ColorSelection";

export const BackgroundColorAnimationScreen = () => {
  return (
    <View style={styles.container}>
      <ColorSelection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
