import { StyleSheet } from "react-native";
import { pallete } from "../../styles/variables";
export const styles = StyleSheet.create({
  imageStyle: {
    height: 250,
    width: 300,
    margin: 8,
    borderRadius: 20,
    borderColor: pallete.black,
    borderWidth: 2,
  },
  scrollStyle: {
    flex: 1,
    backgroundColor: pallete.white,
  },
});
