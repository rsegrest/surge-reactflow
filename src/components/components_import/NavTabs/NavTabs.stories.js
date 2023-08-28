import { NavTabs } from ".";

export default {
  title: "Components/NavTabs",
  component: NavTabs,
  argTypes: {
    property1: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showAdd: true,
    tabName: "Composition Graph",
    property1: "selected",
    className: {},
  },
};
