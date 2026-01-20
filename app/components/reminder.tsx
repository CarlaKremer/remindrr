import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { useBaseStyles } from "../hooks/use-base-styles";
import { useThemeColor } from "../hooks/use-theme-color";
import Card from "./card";
import { ThemedText } from "./themed-text";

export default function Reminder({
  title,
  description,
  dateTime,
}: {
  title?: string;
  description?: string;
  dateTime?: string;
}) {
  const [openModal, setOpenModal] = React.useState(false);
  const textColor = useThemeColor({}, "text");
  const inputBackgroundColor = useThemeColor({}, "input");
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "borderColor");
  const tintColor = useThemeColor({}, "tint");
  const baseStyles = useBaseStyles();
  const styles = StyleSheet.create({
    editBtn: {
      padding: 6,
      position: "absolute",
      top: -10,
      right: 0,
      zIndex: 1,
    },
    options: {
      padding: 10,
      backgroundColor: inputBackgroundColor,
      borderRadius: 8,
      marginVertical: 8,
      color: textColor,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const moreOptions = () => {
    console.log("More options clicked");
    setOpenModal(true);
  };

  const handleEdit = () => {
    console.log("Edit clicked");
    setOpenModal(false);
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    setOpenModal(false);
  };
  return (
    <Card>
      <View>
        <Pressable
          style={[baseStyles.button, styles.editBtn]}
          onPress={moreOptions}
        >
          <AntDesign name="more" size={20} color={`${tintColor}`} />
        </Pressable>

        <ThemedText type="default">{title}</ThemedText>
        <ThemedText type="default">{description}</ThemedText>
        <ThemedText type="default">{dateTime}</ThemedText>

        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={() => setOpenModal(false)}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: backgroundColor,
                padding: 20,
                borderRadius: 10,
                width: "70%",
                borderColor: borderColor,
                borderWidth: 1,
              }}
            >
              <Pressable onPress={handleEdit} style={[styles.options]}>
                <ThemedText>Edit</ThemedText>
              </Pressable>
              <Pressable onPress={handleDelete} style={[styles.options]}>
                <ThemedText>Delete</ThemedText>
              </Pressable>

              <Pressable
                onPress={() => setOpenModal(false)}
                style={{ alignSelf: "flex-end", marginTop: 20 }}
              >
                <ThemedText
                  type="defaultSemiBold"
                  darkColor={tintColor}
                  lightColor={tintColor}
                >
                  Close
                </ThemedText>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </Card>
  );
}
