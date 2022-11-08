import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { ListItemAnimated } from "../components/ListItemAnimated";
import { BLUE_COLOR } from "../utils/contants";

const data = new Array(50).fill(0).map((_, index) => ({ id: index }));
export const FlatListAnimationScreen = () => {
  const viewableItems = useSharedValue([]);

  const onTap = () => {
    console.log("tap");
  };

  const renderItem = ({ item }) => (
    <ListItemAnimated viewableItems={viewableItems} item={item} onTap={onTap} />
  );
  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingTop: 40 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BLUE_COLOR,
  },
});
