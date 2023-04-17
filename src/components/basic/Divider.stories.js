import { Divider as Template } from './Divider';

export default {
  title: 'Basic/Divider', // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(Divider)
  parameters: {
    backgrounds: {
      default: { value: 'light' }, // 스토리의 배경색 설정
    },
  },
  controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
};

/*** 4-2.TODO: 레퍼런스로 제공된 스토리북을 참고하여 Divider의 스토리를 구현하세요. ***/
/* HINT: Storybook에서 title을 직접 입력할 수 있어야 합니다. */
