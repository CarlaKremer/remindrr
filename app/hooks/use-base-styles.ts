import { StyleSheet } from "react-native";
import { useThemeColor } from "./use-theme-color";

export function useBaseStyles() {
  const textColor = useThemeColor({}, "text");
  const inputBackgroundColor = useThemeColor({}, "input");
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "borderColor");
  const tintColor = useThemeColor({}, "tint");

  return StyleSheet.create({
    button: {
      backgroundColor: inputBackgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: 8,
      marginVertical: 10,
      color: textColor,
    },
  });
}
