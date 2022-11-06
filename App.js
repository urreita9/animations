import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AnimationsNavigator } from "./src/navigator/AnimationsNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' backgroundColor='#2dea74' />
      <AnimationsNavigator />
    </NavigationContainer>
  );
}
