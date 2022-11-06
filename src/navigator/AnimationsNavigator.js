import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatListAnimationScreen, HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const AnimationsNavigator = () => (
  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen
      name='HomeScreen'
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name='FlatListAnimationScreen'
      component={FlatListAnimationScreen}
    />
  </Stack.Navigator>
);
