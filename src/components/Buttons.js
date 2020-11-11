import styled from "styled-components";
import { purple, neutral } from "../utils/colors";

const Button = styled.button`
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "SF MONO", "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${purple[300]};
  border: none;
  color: ${neutral[100]};
`;

const SecondaryButton = styled(Button)`
  background-color: ${neutral[100]};
  border-color: ${purple[300]};
  color: ${purple[300]};
`;

const TertiaryButton = styled(Button)`
  background-color: ${neutral[100]};
  border: none;
  color: ${purple[300]};
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
