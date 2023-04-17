/*** 1.TODO: Button의 스타일 및 스토리를 구현하세요. ***/

import { css, styled } from 'styled-components';
import globalToken from '../../../tokens/global.json';
import { LabelText } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { Spacing, borderRadius, Accent, Primary, Gray, White, PrimaryFocus, SecondaryDefault } =
  globalToken;

const ButtonContainer = styled.button`
  /* 기본 스타일 제거*/
  border: none;
  outline: none;
  background-color: transparent;

  /* 레이아웃 */
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap || 0}px;

  /* 공통 스타일 */
  cursor: pointer;
  border-radius: ${borderRadius[8].value}px;

  & > svg {
    color: inherit;
  }

  /* 버튼 크기를 설정하기 위해 패딩 값과 보더 값의 차이를 적용합니다 */
  padding: ${Spacing[8].value - PrimaryFocus.width.value}px
    ${Spacing[16].value - PrimaryFocus.width.value}px;
  border-style: ${SecondaryDefault.style.value};
  border-width: ${SecondaryDefault.width.value}px;

  /* 조건부 스타일 */
  ${(props) =>
    props.primary
      ? css`
          /* Primary 버튼 스타일 */
          border-color: ${Primary.value};
          background-color: ${Primary.value};
          color: ${White.value};

          &:hover {
            color: ${Accent.value};
          }

          &:active {
            border-color: ${Accent.value};
          }
        `
      : /*** 1-1.TODO: Figma를 참고해 Secondary 버튼의 스타일을 지정하세요. ***/
        css``}
`;

export const Button = ({ primary, label, icon, ...rest }) => {
  return (
    <ButtonContainer primary={primary} gap={Spacing[8].value} {...rest}>
      {/*** 1-2.TODO: props로 icon을 전달받았다면 해당 Icon 컴포넌트가 버튼에 표시되도록 구현하세요. ***/}
      <LabelText children={label} />
    </ButtonContainer>
  );
};
