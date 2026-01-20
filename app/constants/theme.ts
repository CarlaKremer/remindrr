import { Platform } from "react-native";

const tintColorLight = "#398ca8";
const tintColorDark = "#c03c3c";

export const Colors = {
  light: {
    text: "#1e1f25",
    background: "#f9fafb",
    backgroundLight: "#ffffff",
    input: "#f3f3f5",
    tint: tintColorLight,
    icon: "#687076",
    borderColor: "#d8d8d8e6",
  },
  dark: {
    text: "#ECEDEE",
    background: "#1b1d1e",
    backgroundLight: "#181a1b",
    input: "#1e2122",
    tint: tintColorDark,
    icon: "#9BA1A6",
    borderColor: "#2e2e3a",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// text: "#c9d1d9",
// backgroundLight: "#2a2b32",

// background: "#1e1f25",
// backgroundLight: "#161b22",
