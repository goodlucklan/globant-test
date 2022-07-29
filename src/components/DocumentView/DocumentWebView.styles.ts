import { StyleSheet } from "react-native";
import { pallete } from "../../styles/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: pallete.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
