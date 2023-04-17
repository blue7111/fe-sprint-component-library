import { styled } from 'styled-components';
import globalToken from '../../../tokens/global.json';
import { Icon } from './Icon';
import { mapStyle } from '../../../utils/mapStyle';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { Spacing, borderRadius, Primary, Gray, White, SecondaryDefault, Body } = globalToken;

// Input 컴포넌트의 컨테이너 스타일
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap || 0}px;
  padding: ${Spacing.base.value}px ${Spacing[12].value}px;
  background: ${White.value};
  border-radius: ${borderRadius.base.value}px;

  /* Input 포커스 시 상위 요소의 스타일 */
  &:focus-within {
    padding: ${Spacing.base.value - SecondaryDefault.width.value}px
      ${Spacing[12].value - SecondaryDefault.width.value}px;
    border: ${SecondaryDefault.width.value}px ${SecondaryDefault.style.value}
      ${SecondaryDefault.color.value};
    & > svg {
      color: ${Primary.value};
    }
  }
`;

// Input 컴포넌트의 input 요소 스타일
const InputStyle = styled.input`
  /* 기본 스타일 제거 */
  outline: none;
  border: none;
  padding: 0;
  flex: 1;

  /* Body 서체 스타일 */
  ${mapStyle(Body)}

  /* Placeholder 스타일 */
  &::placeholder {
    color: ${Gray[700].value};
  }
`;

export const Input = ({ icon, placeholder, ...rest }) => {
  return (
    <InputContainer gap={Spacing[12].value} {...rest}>
      {icon && <Icon icon={icon} />}
      <InputStyle placeholder={placeholder} />
    </InputContainer>
  );
};
