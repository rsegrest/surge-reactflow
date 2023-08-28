import { TopNav } from ".";

export default {
  title: "Components/TopNav",
  component: TopNav,
  argTypes: {
    property1: {
      options: ["dashboard", "main"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "dashboard",
    className: {},
    homeDashClassName: {},
  },
};
