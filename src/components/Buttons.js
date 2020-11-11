import styled from "styled-components";
import { typeScale, defaultTheme } from "../utils";

const Button = styled.button`
  padding: 12px 25px;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;
`;

const SecondaryButton = styled(Button)`
  border-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;

const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
