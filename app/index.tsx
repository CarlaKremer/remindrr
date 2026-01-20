import AntDesign from "@expo/vector-icons/AntDesign";
import { Platform, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddReminder from "./components/addReminder";
import Form from "./components/form";
import Reminder from "./components/reminder";
import { ThemedText } from "./components/themed-text";
import { ThemedView } from "./components/themed-view";
import { useThemeColor } from "./hooks/use-theme-color";

export default function Index() {
  const iconColor = useThemeColor({}, "tint");
  const backgroundColor = useThemeColor({}, "background");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: backgroundColor,
        paddingHorizontal: 16,
      }}
    >
      <ScrollView>
        <ThemedView style={styles.header}>
          <AntDesign name="bell" size={24} color={`${iconColor}`} />
          <ThemedText type="title">Remindrr</ThemedText>
        </ThemedView>
        <AddReminder />
        <Form />
        <Reminder
          title="Title Reminder"
          description="Description Reminder"
          dateTime="Date Time Reminder"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 14,
    gap: 8,
  },
});
