import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { GREEN_COLOR } from "../utils/contants";

const WIDTH = Dimensions.get("window").width;
const TRANSLATE_THRESHOLD = WIDTH * 0.3;

const ITEM_HEIGHT = 80;

export const ListItemAnimated = ({ viewableItems, item }) => {
  const transX = useSharedValue(0);
  const item_height = useSharedValue(80);
  const margin_bottom = useSharedValue(25);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      transX.value = event.translationX;
    },
    onEnd: (event) => {
      if (transX.value < -TRANSLATE_THRESHOLD) {
        transX.value = withTiming(-WIDTH);
        item_height.value = withTiming(0);
        margin_bottom.value = withTiming(0);
        opacity.value = withTiming(0);
      } else {
        transX.value = withTiming(0);
      }
    },
  });

  const listStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((el) => el.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        { scale: withTiming(isVisible ? 1 : 0.6) },
        { translateX: transX.value },
      ],
    };
  }, []);

  const iconStyle = useAnimatedStyle(() => {
    const opacity = withTiming(transX.value < -TRANSLATE_THRESHOLD ? 1 : 0);
    return { opacity };
  });

  const containerStyle = useAnimatedStyle(() => ({
    height: item_height.value,
    marginBottom: margin_bottom.value,
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.item, listStyle]}></Animated.View>
      </PanGestureHandler>
      <Animated.View style={[styles.iconContainer, iconStyle]}>
        <FontAwesome5
          name='trash-alt'
          size={ITEM_HEIGHT * 0.3}
          color={GREEN_COLOR}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    height: ITEM_HEIGHT,
    width: WIDTH * 0.9,
    borderRadius: 15,
    backgroundColor: GREEN_COLOR,
  },
  iconContainer: {
    width: ITEM_HEIGHT,
    position: "absolute",
    right: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
});
