import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends Omit<TouchableOpacityProps, "title"> {
  isLoading?: boolean;
}
