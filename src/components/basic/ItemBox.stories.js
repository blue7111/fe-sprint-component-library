import { ItemBox } from "./ItemBox.js";

export default {
  title: "Basic/ItemBox", // 스토리 분류 및 컴포넌트 이름
  component: ItemBox, // 테스트할 컴포넌트(ItemBox)
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

/*** 5-2.TODO: 레퍼런스로 제공된 스토리북을 참고하여 ItemBox의 스토리를 구현하세요. ***/
/* HINT: Storybook에서 text를 직접 입력할 수 있어야 합니다. */
export const Item = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

export const Items = {
  args: {
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Nulla ac eleifend odio, sit amet convallis tellus.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    ],
  },
};
