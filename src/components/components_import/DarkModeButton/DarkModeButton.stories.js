import { DarkModeButton } from ".";

export default {
  title: "Components/DarkModeButton",
  component: DarkModeButton,
  argTypes: {
    effect: {
      options: ["enabled", "pressed", "focused", "hover", "disabled"],
      control: { type: "select" },
    },
    style: {
      options: ["text", "filled", "outline", "icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    menuText: "Title",
    text: "Label",
    showIcons: true,
    label: "Label",
    effect: "enabled",
    style: "text",
    className: {},
    stateLayerClassName: {},
  },
};
