import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");
const RADIUS = 45;

export const Background = ({ colorSelection }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: 3000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [colorSelection]);
  const rStyle = useAnimatedStyle(() => {
    const MAX_SCALE = Math.sqrt(width ** 2 + height ** 2);
    return {
      borderRadius: RADIUS,
      width: RADIUS * 2,
      height: RADIUS * 2,
      backgroundColor: colorSelection.current.start,
      top: -RADIUS + colorSelection.position.y,
      left: -RADIUS + colorSelection.position.x,
      transform: [{ scale: progress.value * MAX_SCALE }],
    };
  });
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colorSelection.previous.start,
      }}
    >
      <Animated.View style={rStyle}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
