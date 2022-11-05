import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AnimationsNavigator } from "./src/navigator/AnimationsNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AnimationsNavigator />
    </NavigationContainer>
  );
}
