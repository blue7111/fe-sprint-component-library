import { Toast } from "./Toast";

export default {
  title: "Composed/Toast",
  component: Toast,
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const Sample = (args) => <Toast {...args} />;
Sample.args = {
  duration: 4000,
  position: "top-left",
};
Sample.argTypes = {
  position: {
    options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    control: { type: "radio" },
  },
};

export const Success = (args) => <Toast {...args} />;
Success.args = {
  level: "success",
  title: "Success",
  detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
};
Success.argTypes = {
  level: {
    options: ["success", "error", "warning"],
    control: { type: "radio" },
  },
};

export const Error = (args) => <Toast {...args} />;
Error.args = {
  level: "error",
  title: "Error",
  detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
};
Error.argTypes = {
  level: {
    options: ["success", "error", "warning"],
    control: { type: "radio" },
  },
};

export const Warning = (args) => <Toast {...args} />;
Warning.args = {
  level: "warning",
  title: "Warning",
  detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
};
Warning.argTypes = {
  level: {
    options: ["success", "error", "warning"],
    control: { type: "radio" },
  },
};
