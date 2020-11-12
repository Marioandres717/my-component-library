import { purple, neutral, yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

const defaultTheme = {
  primaryColor: purple[300],
  primaryColorHover: purple[200],
  primaryColorFocus: purple[200],
  primaryColorActive: purple[100],
  primaryColorDisabled: neutral[400],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  textColorOnDisabled: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export { defaultTheme };
