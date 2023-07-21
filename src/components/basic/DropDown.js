import { styled } from "styled-components";
import { ChevronButton } from "./buttons/ChevronButton";
import { useState } from "react";
import { ItemBox } from "./ItemBox";
import globalToken from "../../tokens/global.json";

const { borderRadius, White, boxShadow } = globalToken;
export const DropDownContainer = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  width: 162px;
`;

export const DropDownMenuContainer = styled.div`
  border-radius: ${borderRadius[8].value}px;
  background-color: ${White.value};
  overflow: hidden;
  box-shadow: ${boxShadow.modal.x.value}px ${boxShadow.modal.y.value}px
    ${boxShadow.modal.blur.value}px ${boxShadow.modal.spread.value}px
    ${boxShadow.modal.color.value};
`;
export const DropDown = ({ list }) => {
  const [curLabel, setCurLabel] = useState(list[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const LabelHandle = (idx) => {
    setIsExpanded((prev) => !prev);
    setCurLabel(list[idx]);
  };
  return (
    <DropDownContainer>
      <ChevronButton
        label={curLabel}
        onClick={() => setIsExpanded((prev) => !prev)}
      />
      {isExpanded && (
        <DropDownMenuContainer>
          <ItemBox list={list} LabelHandle={LabelHandle} />
        </DropDownMenuContainer>
      )}
    </DropDownContainer>
  );
};
