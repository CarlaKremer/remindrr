import { useThemeColor } from "../hooks/use-theme-color";
import { ThemedView } from "./themed-view";

export default function Card({ children }: { children: React.ReactNode }) {
  const backgroundColor = useThemeColor({}, "backgroundLight");
  const borderColor = useThemeColor({}, "borderColor");
  return (
    <ThemedView
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 12,
        borderColor: borderColor,
        borderWidth: 1,
        marginTop: 16,
        padding: 16,
      }}
    >
      {children}
    </ThemedView>
  );
}
