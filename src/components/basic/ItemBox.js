/*** 5.TODO: ItemBox의 스타일 및 스토리를 구현하세요. ***/

import { styled } from 'styled-components';
import { BodyText } from './atoms/Typography';
import globalToken from '../../tokens/global.json';
import { DividerContainer } from './Divider';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { Spacing, Gray, Primary, White } = globalToken;

export const ItemContainer = styled(DividerContainer)`
  /*** 5-1.TODO: DividerContainer 스타일 컴포넌트를 확장하여 아이템 컨테이너의 스타일을 작성합니다. ***/
  /*** HINT: Figma를 참고해 ItemBox 컨테이너의 스타일을 지정하세요. ***/
`;

export const ItemBox = ({ text, ...rest }) => {
  return (
    <ItemContainer {...rest}>
      <BodyText children={text} />
    </ItemContainer>
  );
};
