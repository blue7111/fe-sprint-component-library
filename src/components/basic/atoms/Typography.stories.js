import { HeadingText, LabelText, BodyText } from './Typography';

// Typography 컴포넌트는 주어진 type에 따라 적절한 스타일의 텍스트를 렌더링합니다.
const Typography = ({ type, text }) => {
  if (type === 'Heading') {
    return <HeadingText>{text}</HeadingText>;
  } else if (type === 'Label') {
    return <LabelText>{text}</LabelText>;
  } else if (type === 'Body') {
    return <BodyText>{text}</BodyText>;
  } else {
    return <BodyText>{text}</BodyText>;
  }
};

export default {
  title: 'Atoms/Typography', // 스토리북에서의 제목 및 컴포넌트 이름
  component: Typography, // 테스트할 컴포넌트(Typography)
  argTypes: {
    type: {
      options: ['Heading', 'Label', 'Body'], // type 옵션
      control: { type: 'radio' }, // 라디오 버튼으로 선택할 수 있는 컨트롤
    },
  },
  parameters: {
    backgrounds: {
      default: { value: 'light' }, // 배경 설정
    },
  },
};

// Heading 스타일의 텍스트 컴포넌트 테스트
export const Heading = {
  args: {
    type: 'Heading',
    text: `Lorem ipsum dolor sit amet`,
  },
};

// Label 스타일의 텍스트 컴포넌트 테스트
export const Label = {
  args: {
    type: 'Label',
    text: `Lorem ipsum dolor sit amet`,
  },
};

// Body 스타일의 텍스트 컴포넌트 테스트
export const Body = {
  args: {
    type: 'Body',
    text: `Lorem ipsum dolor sit amet`,
  },
};
