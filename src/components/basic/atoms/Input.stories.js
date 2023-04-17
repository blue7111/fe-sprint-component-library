import { iconNames } from './Icon';
import { Input } from './Input';

export default {
  title: 'Atoms/Input', // 스토리 분류 및 컴포넌트 이름
  component: Input, // 테스트할 컴포넌트(Input)
  argTypes: {
    icon: {
      options: iconNames, // 아이콘 종류에 대한 옵션 설정
      control: { type: 'select' }, // 컨트롤 타입을 select로 설정
    },
  },
};

// Default 스토리 정의
export const Default = {
  args: { placeholder: '내용을 입력하세요', style: { width: '24rem' } }, // 초기 설정 값
};

// WithLeftIcon 스토리 정의
export const WithLeftIcon = {
  args: { icon: 'Search', placeholder: '검색어를 입력하세요.', style: { width: '24rem' } }, // 초기 설정 값
};
