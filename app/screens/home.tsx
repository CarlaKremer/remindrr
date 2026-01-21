import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Platform, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddReminder from "../components/addReminder";
import Form from "../components/form";
import Reminder from "../components/reminder";
import { ThemedText } from "../components/themed-text";
import { ThemedView } from "../components/themed-view";
import { useThemeColor } from "../hooks/use-theme-color";
import { ReminderType } from "../types/reminder";

export default function Home() {
  const iconColor = useThemeColor({}, "tint");
  const backgroundColor = useThemeColor({}, "background");
  const [showForm, setShowForm] = React.useState(false);
  const [reminders, setReminders] = React.useState<ReminderType[]>([]);
  const [editingReminder, setEditingReminder] = React.useState<boolean>(false);
  const [newReminderData, setNewReminderData] = React.useState<ReminderType>({
    title: "",
    description: "",
    date: null,
    time: null,
  });
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);

  const saveNewReminderData = (data: ReminderType) => {
    console.log("Saving new reminder data:", data);
    if (editingIndex !== null) {
      // Update
      const updatedReminders = [...reminders];
      updatedReminders[editingIndex] = data;
      setReminders(updatedReminders);
      setEditingIndex(null);
      setEditingReminder(false);
    } else {
      // Add
      setReminders((prevReminders) => [...prevReminders, data]);
    }
    setShowForm(false);
  };

  const createReminder = () => {
    setEditingIndex(null);
    setNewReminderData({
      title: "",
      description: "",
      date: null,
      time: null,
    });
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setNewReminderData(reminders[index]);
    setEditingReminder(true);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setReminders((prevReminders) =>
      prevReminders.filter((_, i) => i !== index),
    );
  };
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
        {showForm === false && <AddReminder createReminder={createReminder} />}
        {showForm && (
          <Form
            data={newReminderData}
            onDataChange={setNewReminderData}
            onClose={(data) => saveNewReminderData(data)}
            editing={editingReminder}
          />
        )}
        {!editingReminder &&
          reminders.map((reminder, index) => (
            <Reminder
              title={reminder.title}
              description={reminder.description}
              date={reminder.date}
              time={reminder.time}
              index={index}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
              key={index}
            />
          ))}
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
