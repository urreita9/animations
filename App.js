import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AnimationsNavigator } from "./src/navigator/AnimationsNavigator";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#1e173e" }} />
      <StatusBar style='inverted' backgroundColor='#2dea74' />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AnimationsNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
