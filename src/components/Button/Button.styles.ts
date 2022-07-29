import { StyleSheet } from "react-native";
import { pallete } from "../../styles/variables";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: pallete.black,
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  textButton: {
    color: pallete.white,
    textAlign: "center",
  },
});
