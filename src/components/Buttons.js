import styled from "styled-components";

const primary100 = "#9D95ED";
const primary200 = "#6256E8";
const primary300 = "#383180";

const neutral100 = "#ffffff";
const neutral200 = "";
const neutral300 = "";
const neutral600 = "#000000";

const Button = styled.button`
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "SF MONO", "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primary300};
  border: none;
  color: ${neutral100};
`;

const SecondaryButton = styled(Button)`
  background-color: ${neutral100};
  border-color: ${primary300};
  color: ${primary300};
`;

const TertiaryButton = styled(Button)`
  background-color: ${neutral100};
  border: none;
  color: ${primary300};
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
