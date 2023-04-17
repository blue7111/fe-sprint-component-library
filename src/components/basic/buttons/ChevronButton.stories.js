import { useState } from 'react';
import { ChevronButton } from './ChevronButton';

export default {
  title: 'Basic/Buttons/ChevronButton', // 스토리 분류 및 컴포넌트 이름
  component: ChevronButton, // 테스트할 컴포넌트
  parameters: {
    backgrounds: { default: 'light' }, // 스토리의 배경색 설정
  },
};

// 템플릿 컴포넌트 정의
const Template = (args) => {
  // isExpanded 상태 관리를 위한 useState 훅 사용
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ChevronButton
      isExpanded={isExpanded} // isExpanded 속성을 템플릿 컴포넌트의 상태와 연결
      label={args.label} // 레이블 속성을 전달
      onClick={() => setIsExpanded(!isExpanded)} // 클릭 이벤트 핸들러
    />
  );
};

/*** 2-4.TODO: Figma를 참고해 ChevronButton 컴포넌트의 스토리를 구현하세요. ***/
/* HINT: 레퍼런스로 제공된 스토리북을 참고하여 구현하세요. */

// 스토리: 아이콘만 있는 버튼
export const OnlyIcon = (args) => <Template {...args} />;

// 스토리: 레이블과 아이콘이 있는 버튼
export const WithLabel = (args) => <Template {...args} />;
WithLabel.args = {
  // FILL_ME_IN
};
