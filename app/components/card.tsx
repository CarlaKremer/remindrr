import { StyleProp, ViewStyle } from "react-native";
import { useThemeColor } from "../hooks/use-theme-color";
import { ThemedView } from "./themed-view";

interface CardProps {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

export default function Card({ children, customStyle }: CardProps) {
  const backgroundColor = useThemeColor({}, "backgroundLight");
  const borderColor = useThemeColor({}, "borderColor");
  return (
    <ThemedView
      style={[
        {
          backgroundColor: backgroundColor,
          borderRadius: 12,
          borderColor: borderColor,
          borderWidth: 1,
          marginTop: 16,
          padding: 16,
        },
        customStyle,
      ]}
    >
      {children}
    </ThemedView>
  );
}
