/*** 3.TODO: IconButton의 스토리를 구현하세요. ***/

import { Button } from "./Button";
import { iconNames } from "../atoms/Icon";

export default {
  title: "Basic/Buttons/IconButton",
  component: Button, // Button 컴포넌트를 사용하여 IconButton 스토리를 만듭니다.
  argTypes: {
    icon: {
      /*** 3-1.TODO: options, control 프로퍼티를 지정해 아이콘 종류를 선택할 수 있도록 구현하세요. ***/
      /* HINT: Icon 컴포넌트의 스토리를 참고해 구현하세요. */
      options: iconNames,
      control: { type: "select" },
    },
  },
};

export const Primary = {
  args: {
    /*** 3-2.TODO: Primary 스토리를 지정하세요. ***/
    primary: true,
    label: "Button",
    icon: "Plus",
  },
};

export const Secondary = {
  args: {
    /*** 3-3.TODO: Secondary 스토리를 지정하세요. ***/
    secondary: true,
    label: "취소",
    icon: "X",
  },
};
