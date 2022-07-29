import * as Font from "expo-font";

const customFonts = {
  regular: require("../assets/fonts/Inconsolata-Regular.ttf"),
  medium: require("../assets/fonts/Inconsolata-Medium.ttf"),
  bold: require("../assets/fonts/Inconsolata-Bold.ttf"),
};

export const loadFont = async () => {
  await Font.loadAsync(customFonts);
};
