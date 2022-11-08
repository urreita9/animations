import { View, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { BLUE_COLOR, GREEN_COLOR } from "../utils/contants";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useHeaderHeight } from "@react-navigation/elements";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const CIRCLE_LENGTH = 1000;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const BUTTON_LENGTH = 100;
const buttonRadio = BUTTON_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircularProgressScreen = () => {
  const headerHeight = useHeaderHeight();
  const progress = useSharedValue(1);
  const theta = useSharedValue(0);
  const transX = useSharedValue(R * Math.cos(theta.value));
  const transY = useSharedValue(
    -R * Math.sin(theta.value) - buttonRadio - headerHeight
  );

  const panGesture = useAnimatedGestureHandler({
    onStart: () => {
      console.log(theta.value);
    },
    onActive: (event) => {
      const x = event.absoluteX;
      const y = event.absoluteY;
      const cx = WIDTH / 2;
      const cy = HEIGHT / 2;
      const buttonX = x - cx - buttonRadio;
      const buttonY = -1 * (y - cy + buttonRadio);

      if (buttonX > 0 && buttonY > 0) {
        theta.value = Math.atan(buttonY / buttonX);
        progress.value = (theta.value * R) / 1000;
      } else if (buttonX < 0 && buttonY > 0) {
        theta.value = Math.atan(buttonY / buttonX) - Math.PI;
        progress.value = -1 + (theta.value * R) / 1000;
      } else if (buttonX < 0 && buttonY <= 0) {
        theta.value = Math.atan(buttonY / buttonX) - Math.PI;
        progress.value = -1 + (theta.value * R) / 1000;
      } else {
        theta.value = Math.atan(buttonY / buttonX) - Math.PI * 2;
        progress.value = (theta.value * R) / 1000;
      }
      transX.value = R * Math.cos(theta.value);
      transY.value = -R * Math.sin(theta.value) - buttonRadio - headerHeight;
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: transX.value }, { translateY: transY.value }],
    };
  });

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * progress.value,
  }));

  const imageRStyle = useAnimatedStyle(() => {
    let scale;
    if (progress.value > 0) {
      scale = progress.value - 2;
    } else {
      scale = progress.value;
    }

    return {
      transform: [{ scale: -scale * 3 }],
    };
  });
  return (
    <View style={styles.container}>
      <Svg>
        <Circle
          cx={WIDTH / 2}
          cy={HEIGHT / 2 - headerHeight}
          r={R}
          stroke='#302564'
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={WIDTH / 2}
          cy={HEIGHT / 2 - headerHeight}
          r={R}
          stroke={GREEN_COLOR}
          strokeWidth={20}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap='round'
        />
      </Svg>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.button, rStyle]}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.image}
          />
        </Animated.View>
      </PanGestureHandler>
      <Animated.View
        style={[
          styles.imageContainer,
          { top: HEIGHT / 2 - headerHeight - 20 },
          imageRStyle,
        ]}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={[styles.imageContainer]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: buttonRadio * 2,
    height: buttonRadio * 2,
    borderRadius: buttonRadio,
    backgroundColor: GREEN_COLOR,
    borderColor: BLUE_COLOR,
    borderWidth: 2,
    position: "absolute",
    top: HEIGHT / 2,
    transform: [{ translateX: buttonRadio }, { translateY: buttonRadio }],
  },
  imageContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: R / 4,
    height: R / 4,
  },
  image: { width: "100%", height: "100%" },
  text: {
    textAlign: "center",
    color: GREEN_COLOR,
    fontSize: 50,
  },
  image: { width: "100%", height: "100%" },
});
