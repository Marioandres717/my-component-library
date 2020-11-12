import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { contexts } from "./context";

addParameters({
  backgrounds: {
    default: "Defaut Theme",
    values: [
      { name: "Default theme", value: "#ffffff" },
      { name: "Dark theme", value: "#383180" },
    ],
  },
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
