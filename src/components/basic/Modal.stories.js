import { Modal } from "./Modal";

export default {
  title: "Composed/Modal",
  component: Modal,
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const WithBackdrop = (args) => <Modal {...args} />;
WithBackdrop.args = {
  backdrop: true,
};

export const WithoutBackdrop = (args) => <Modal {...args} />;
WithoutBackdrop.args = {
  backdrop: false,
};
