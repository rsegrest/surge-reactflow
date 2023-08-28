import { QuickCards } from ".";

export default {
  title: "Components/QuickCards",
  component: QuickCards,
  argTypes: {
    property1: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Title",
    property1: "selected",
    className: {},
  },
};
