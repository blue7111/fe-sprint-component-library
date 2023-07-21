import { DropDown } from "./DropDown";

export default {
  title: "Composed/DropDown", // 스토리 분류 및 컴포넌트 이름
  component: DropDown, // 테스트할 컴포넌트(ItemBox)
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const Sample = (args) => <DropDown {...args} />;
Sample.args = {
  label: "프로젝트",
  list: ["운동", "습관 만들기", "업무"],
};
