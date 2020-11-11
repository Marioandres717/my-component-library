import styled from "styled-components";
import { typeScale, defaultTheme } from "../utils";

const Button = styled.button`
  padding: 12px 25px;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorFocus};
    outline-offset: 2px;
    background-color: ${defaultTheme.primaryColorFocus};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};
  border: 2px solid transparent;
  &:disabled {
    background-color: ${defaultTheme.primaryColorDisabled};
    color: ${defaultTheme.textColorOnDisabled};
  }
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.primaryColorDisabled};
    border-color: ${defaultTheme.primaryColorDisabled};
  }
`;

const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
  &:disabled {
    background: none;
    color: ${defaultTheme.primaryColorDisabled};
  }
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
