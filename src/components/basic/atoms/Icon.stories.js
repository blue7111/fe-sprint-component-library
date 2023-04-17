import { Icon } from './Icon';
import { iconNames } from './Icon';

export default {
  title: 'Atoms/Icons', // 스토리 분류 및 컴포넌트 이름
  component: Icon, // 테스트할 컴포넌트(Icon)
  parameters: {
    backgrounds: { default: { value: 'light' } }, // 스토리의 배경색 설정
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  },
};

// 사용하는 아이콘을 볼 수 있는 All 스토리 정의
export const All = () => (
  <div
    style={{ display: 'grid', gridTemplateColumns: '3rem 3rem 3rem 3rem', gridAutoRows: '3rem' }}
  >
    {iconNames.map((icon) => (
      <Icon icon={icon} key={icon} />
    ))}
  </div>
);

// Item 스토리 정의
export const Item = (args) => <Icon {...args} />; // Icon 컴포넌트 렌더링
Item.argTypes = {
  icon: {
    options: iconNames, // 아이콘 이름 옵션 설정
    control: { type: 'select' }, // 컨트롤 타입을 select로 설정
  },
  size: {
    options: [16, 24, 48], // 아이콘 크기 옵션 설정
    control: { type: 'radio' }, // 컨트롤 타입을 radio로 설정
  },
};
Item.args = {
  icon: 'Plus', // 초기 아이콘 설정
  size: 24, // 초기 아이콘 크기 설정
};
