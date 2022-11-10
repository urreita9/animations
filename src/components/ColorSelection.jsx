import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../utils/contants";
import { Color, COLOR_WIDTH } from "./Color";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { useState } from "react";
import { Background } from "./Background";

const snapPoints = colors.map((_, index) => -index * COLOR_WIDTH);

export const ColorSelection = () => {
  const [colorSelection, setColorSelection] = useState({
    previous: colors[0],
    current: colors[0],
    position: { x: 0, y: 0 },
  });

  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.transX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = event.translationX + ctx.transX;
    },
    onEnd: (event) => {
      const destination = snapPoint(
        translateX.value,
        event.velocityX,
        snapPoints
      );
      translateX.value = withSpring(destination);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={styles.container}>
        <Background colorSelection={colorSelection} />
        <View style={{ width: COLOR_WIDTH }} />
        {colors.map((color, index) => (
          <Color
            key={index}
            color={color}
            index={index}
            translateX={translateX}
            onPress={(x, y) => {
              translateX.value = withSpring(-index * COLOR_WIDTH);
              setColorSelection({
                position: { x, y },
                previous: colorSelection.current,
                current: color,
              });
            }}
          />
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
