import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { ButtonProps as Props } from "./Button.interface";
import { styles } from "./Button.styles";
import { pallete } from "../../styles/variables";
const Button: React.FC<Props> = (props) => {
  const { onPress, isLoading = false } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {isLoading ? <ActivityIndicator color={pallete.green} /> : null}
      <Text style={styles.textButton}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
