import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useBaseStyles } from "../hooks/use-base-styles";
import { useThemeColor } from "../hooks/use-theme-color";
import Card from "./card";
import DateTimePicker from "./date-time-picker";
import { ThemedText } from "./themed-text";
export default function Form() {
  const textColor = useThemeColor({}, "text");
  const inputBackgroundColor = useThemeColor({}, "input");
  const borderColor = useThemeColor({}, "borderColor");
  const tintColor = useThemeColor({}, "tint");
  const baseStyles = useBaseStyles();
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

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
    <Card>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          placeholderTextColor={textColor}
          underlineColorAndroid={textColor}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Description"
          placeholderTextColor={textColor}
          underlineColorAndroid={textColor}
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

        <Pressable style={[baseStyles.button, styles.confirmButton]}>
          <ThemedText type="input">+ Add reminder</ThemedText>
        </Pressable>
      </View>
    </Card>
  );
}
