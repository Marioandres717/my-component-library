import { purple, neutral } from "./colors";
import { primaryFont } from "./typography";

const defaultTheme = {
  primaryColor: purple[300],
  primaryColorHover: purple[200],
  primaryColorActive: purple[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  primaryFont,
};

export { defaultTheme };
