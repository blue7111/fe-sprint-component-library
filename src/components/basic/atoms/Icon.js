import * as Icons from 'react-feather';
import globalToken from '../../../tokens/global.json';
import { styled } from 'styled-components';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { Gray } = globalToken;

export const iconNames = [
  'Menu',
  'List',
  'Plus',
  'X',
  'Star',
  'Circle',
  'CheckCircle',
  'Calendar',
  'Search',
  'ChevronUp',
  'ChevronDown',
];

export const Icon = ({ icon, color, size, ...rest }) => {
  // FeatherIcon 컴포넌트를 동적으로 생성하고 스타일링합니다.
  const FeatherIcon = styled(Icons[icon])`
    color: ${(props) => props.color || Gray[700].value};
  `;
  return <FeatherIcon size={size} color={color} {...rest} />;
};
