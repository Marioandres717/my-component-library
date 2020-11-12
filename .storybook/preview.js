import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withA11y } from "@storybook/addon-a11y";
import { contexts } from "./context";

addParameters({
  backgrounds: {
    default: "Default theme",
    values: [
      { name: "Default theme", value: "#ffffff" },
      { name: "Dark theme", value: "#383180" },
    ],
  },
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: false,
  },
});

addDecorator(withContexts(contexts));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
