import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useBaseStyles } from "../hooks/use-base-styles";
import { useThemeColor } from "../hooks/use-theme-color";
import { ReminderType } from "../types/reminder";
import Card from "./card";
import DateTimePicker from "./date-time-picker";
import { ThemedText } from "./themed-text";

interface FormProps {
  data: ReminderType;
  onDataChange: (data: ReminderType) => void;
  onClose: (data: ReminderType) => void;
}

export default function Form({ data, onDataChange, onClose }: FormProps) {
  const textColor = useThemeColor({}, "text");
  const inputBackgroundColor = useThemeColor({}, "input");
  const borderColor = useThemeColor({}, "borderColor");
  const tintColor = useThemeColor({}, "tint");
  const baseStyles = useBaseStyles();
  const [date, setDate] = useState<Date | null>(
    data.date ? new Date(data.date) : null,
  );
  const [time, setTime] = useState<Date | null>(
    data.time ? new Date(data.time) : null,
  );
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const onChange = (event: any, selectedDate: Date | undefined) => {
    setShow(false);
    if (selectedDate) {
      if (mode === "date") {
        setDate(selectedDate);
      } else {
        setTime(selectedDate);
      }
    }
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const styles = StyleSheet.create({
    textInput: {
      backgroundColor: inputBackgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
      color: textColor,
    },
    halfWidthButton: {
      width: "48%",
    },
    confirmButton: {
      alignItems: "center",
      padding: 8,
      backgroundColor: tintColor,
    },
  });

  return (
    <Card customStyle={{ paddingTop: 32 }}>
      <Pressable
        style={[baseStyles.closeButton]}
        onPress={() => onClose({ title, description, date, time })}
      >
        <AntDesign name="close" size={20} color={`${tintColor}`} />
      </Pressable>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          placeholderTextColor={textColor}
          underlineColorAndroid={textColor}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          placeholderTextColor={textColor}
          underlineColorAndroid={textColor}
          value={description}
          onChangeText={setDescription}
        />

        <View style={{ flexDirection: "row", gap: 10, width: "100%" }}>
          <Pressable
            onPress={showDatepicker}
            style={[baseStyles.button, styles.halfWidthButton]}
          >
            {date ? (
              <ThemedText style={{ padding: 10 }} type="input">
                {date.toLocaleDateString()}
              </ThemedText>
            ) : (
              <ThemedText style={{ padding: 10 }} type="input">
                Select Date
              </ThemedText>
            )}
          </Pressable>

          <Pressable
            onPress={showTimepicker}
            style={[baseStyles.button, styles.halfWidthButton]}
          >
            {time ? (
              <ThemedText style={{ padding: 10 }} type="input">
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </ThemedText>
            ) : (
              <ThemedText style={{ padding: 10 }} type="input">
                Select Time
              </ThemedText>
            )}
          </Pressable>
        </View>

        {show && (
          <DateTimePicker
            value={
              date && time
                ? new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    time.getHours(),
                    time.getMinutes(),
                  )
                : date || time || new Date()
            }
            mode={mode as "date" | "time"}
            onChange={onChange}
          />
        )}

        <Pressable
          style={[baseStyles.button, styles.confirmButton]}
          onPress={() => {
            const formData = {
              title,
              description,
              date,
              time,
            };
            console.log("Form data submitted:", formData);
            onDataChange(formData);
            onClose(formData);
          }}
        >
          <ThemedText type="input">+ Add reminder</ThemedText>
        </Pressable>
      </View>
    </Card>
  );
}
