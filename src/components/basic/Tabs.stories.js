import { Tabs } from "./Tabs";

export default {
  title: "Composed/Tabs",
  component: Tabs,
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const Sample = (args) => <Tabs {...args} />;
Sample.args = {
  title: "프로젝트",
  list: [
    {
      label: "전체",
      icon: "List",
      count: 3,
    },
    {
      label: "중요",
      icon: "Star",
      count: 0,
    },
    {
      label: "오늘 할 일",
      icon: "Calendar",
      count: 1,
    },
  ],
  style: {
    width: "20rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
};

export const Default = (args) => <Tabs {...args} />;
Default.args = {
  label: "전체",
  icon: "List",
  count: 3,
  style: {
    width: "20rem",
  },
};
