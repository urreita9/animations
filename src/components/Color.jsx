import React from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TapGestureHandler } from "react-native-gesture-handler";
import { BLUE_COLOR } from "../utils/contants";

const { width } = Dimensions.get("window");

export const COLOR_WIDTH = width / 3;
const RADIUS = 45;

export const Color = ({ color, index, translateX, onPress }) => {
  const tapGesture = useAnimatedGestureHandler({
    onActive: ({ absoluteX, absoluteY }) => {
      runOnJS(onPress)(absoluteX, absoluteY);
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <TapGestureHandler onGestureEvent={tapGesture}>
        <Animated.View>
          <Image source={color.img} style={styles.gradient} />
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: COLOR_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS,
  },
});
