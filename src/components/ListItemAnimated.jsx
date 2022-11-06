import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;

export const ListItemAnimated = ({ viewableItems, item }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((el) => el.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{ scale: withTiming(isVisible ? 1 : 0.6) }],
    };
  }, []);
  return <Animated.View style={[styles.item, rStyle]} />;
};

const styles = StyleSheet.create({
  item: {
    height: 80,
    width: WIDTH * 0.9,
    borderRadius: 15,
    backgroundColor: "#2dea74",
    marginTop: 25,
  },
});
