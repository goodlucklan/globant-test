import { StyleSheet } from "react-native";
import { pallete } from "../../styles/variables";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pallete.white,
  },
  viewContainer: {
    margin: 12,
  },
  textStyle: {
    color: pallete.black,
    fontSize: 20,
    textAlign: "center",
  },
  imageStyle: {
    height: 250,
    width: 300,
    margin: 8,
    borderRadius: 20,
    borderColor: pallete.black,
    borderWidth: 2,
  },
  scrollStyle: {
    marginBottom: 56,
  },
});
