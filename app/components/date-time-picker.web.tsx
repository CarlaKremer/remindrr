import React from "react";
import { View } from "react-native";

interface DateTimePickerProps {
  value: Date;
  mode: "date" | "time";
  onChange: (event: any, date: Date | undefined) => void;
}

export default function DateTimePickerComponent({
  value,
  mode,
  onChange,
}: DateTimePickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let newDate = new Date();

    if (mode === "date") {
      const [year, month, day] = inputValue.split("-");
      newDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else if (mode === "time") {
      const [hours, minutes] = inputValue.split(":");
      newDate.setHours(parseInt(hours), parseInt(minutes));
    }

    onChange({ nativeEvent: {} } as any, newDate);
  };

  const formatDateForInput = () => {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatTimeForInput = () => {
    const hours = String(value.getHours()).padStart(2, "0");
    const minutes = String(value.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <View>
      <input
        type={mode === "date" ? "date" : "time"}
        value={mode === "date" ? formatDateForInput() : formatTimeForInput()}
        onChange={handleChange}
        placeholder={mode === "date" ? "Select a date" : "Select a time"}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
    </View>
  );
}
