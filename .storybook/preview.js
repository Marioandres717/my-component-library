import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./context";

addParameters({
  backgrounds: {
    default: "Default theme",
    values: [
      { name: "Default theme", value: "#ffffff" },
      { name: "Dark theme", value: "#383180" },
    ],
  },
});

addDecorator(withContexts(contexts));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
