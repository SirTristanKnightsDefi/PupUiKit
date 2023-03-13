import { Colors } from "./types";

export const baseColors = {
  failure: "#fa113e",
  primary: "#01BDC6",
  primaryBright: "#01BDC6",
  primaryDark: "#028E9B",
  secondary: "#01BDC6",
  success: "#15bd69",
  warning: "#fa113e",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f6f8", // light color
  backgroundDisabled: "#E9EAEB", 
  contrast: "#191326", // dark color
  invertedContrast: "#FFFFFF", // white
  input: "#eeeeee",
  tertiary: "#EFF4F5",
  text: "#028E9B",
  textDisabled: "#BDC2C4",
  textSubtle: "#028E9B",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#05FC9C",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#EAE2FC",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
