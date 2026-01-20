import { Pressable, StyleSheet } from "react-native";
import { useBaseStyles } from "../hooks/use-base-styles";
import { ThemedText } from "./themed-text";

interface AddReminderProps {
  createReminder: () => void;
}

export default function AddReminder({ createReminder }: AddReminderProps) {
  const baseStyles = useBaseStyles();
  const styles = StyleSheet.create({
    touchable: {
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 0,
      marginVertical: 0,
    },
  });
  return (
    <Pressable
      style={[baseStyles.button, styles.touchable]}
      onPress={createReminder}
    >
      <ThemedText>+ Add Reminder</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
