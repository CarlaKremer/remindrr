import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React from "react";

interface DateTimePickerProps {
  value: Date;
  mode: "date" | "time";
  onChange: (event: DateTimePickerEvent, date: Date | undefined) => void;
}

export default function DateTimePickerComponent({
  value,
  mode,
  onChange,
}: DateTimePickerProps) {
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={value}
      mode={mode}
      is24Hour={true}
      onChange={onChange}
    />
  );
}
