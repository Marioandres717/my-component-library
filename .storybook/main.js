module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-contexts/register",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register",
  ],
};
