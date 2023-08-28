import { DarkModeMenuList } from ".";

export default {
  title: "Components/DarkModeMenuList",
  component: DarkModeMenuList,
  argTypes: {
    effect: {
      options: ["focused", "pressed", "hover", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showDate: true,
    dates: "Date",
    text: "Label",
    effect: "focused",
    className: {},
  },
};
