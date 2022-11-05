import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavButton({ text, screen }) {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate(screen);
  };
  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.button}>
      <Text>{text}</Text>

      <AntDesign name='rightcircleo' size={24} color='black' />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    elevation: 10,
    width: "90%",
    backgroundColor: "#2dea74",
    borderRadius: 10,
    shadowColor: "#1e173e",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
