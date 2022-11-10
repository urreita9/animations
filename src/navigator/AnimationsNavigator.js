import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FlatListAnimationScreen,
  HomeScreen,
  CircularProgressScreen,
  BackgroundColorAnimationScreen,
} from "../screens";
import { BLUE_COLOR, GREEN_COLOR } from "../utils/contants";

const options = {
  title: "",
  headerStyle: {
    backgroundColor: BLUE_COLOR,
  },
  headerTintColor: GREEN_COLOR,
};

const Stack = createNativeStackNavigator();

export const AnimationsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='FlatListAnimationScreen'
        component={FlatListAnimationScreen}
        options={options}
      />
      <Stack.Screen
        name='CircularProgressScreen'
        component={CircularProgressScreen}
        options={options}
      />
      <Stack.Screen
        name='BackgroundColorAnimationScreen'
        component={BackgroundColorAnimationScreen}
        options={{ ...options }}
      />
    </Stack.Navigator>
  );
};
