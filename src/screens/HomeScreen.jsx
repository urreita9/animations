import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import { BLUE, BLUE_COLOR } from "../utils/contants";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const HomeScreen = () => {
  const imageX = useSharedValue(0);
  const imageY = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.x = imageX.value;
      ctx.y = imageY.value;
    },
    onActive: (event, ctx) => {
      imageX.value = event.translationX + ctx.x;
      imageY.value = event.translationY + ctx.y;
    },
    onEnd: () => {
      imageX.value = withSpring(0);
      imageY.value = withSpring(0);
    },
  });

  const imageRStle = useAnimatedStyle(() => ({
    transform: [{ translateX: imageX.value }, { translateY: imageY.value }],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.imageContainer, imageRStle]}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.image}
          />
        </Animated.View>
      </PanGestureHandler>

      <NavButton text='List Animation' screen='FlatListAnimationScreen' />
      <NavButton
        text='Circular Progress Animation'
        screen='CircularProgressScreen'
      />
      <NavButton
        text='Background Color Animation'
        screen='BackgroundColorAnimationScreen'
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
  imageContainer: {
    width: WIDTH / 2,
    height: WIDTH / 2,
    position: "absolute",
    top: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
