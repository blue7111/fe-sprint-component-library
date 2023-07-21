import { useState } from "react";
import { LabelText } from "./atoms/Typography";
import { Icon } from "./atoms/Icon";
import { Divider } from "./Divider";
import { styled } from "styled-components";
import globalToken from "../../tokens/global.json";
const {
  Spacing,
  borderRadius,
  Negative,
  Secondary,
  Primary,
  White,
  Gray,
  Black,
} = globalToken;
const Container = styled.div`
  display: flex;
  border-radius: ${borderRadius[8].value}px;
  padding: ${Spacing[8].value}px;
`;

export const Tabs = ({ title, list, style, icon, label, count }) => {
  const [curTab, setCurTab] = useState(null);
  const [curHover, setCurHover] = useState(null);
  return (
    <div style={style}>
      {title && <Divider title={title} />}
      {title &&
        list &&
        list.map((el, idx) => (
          <Container
            key={idx}
            onMouseEnter={() => setCurHover(idx)}
            onMouseLeave={() => setCurHover(null)}
            onClick={() => {
              setCurTab(idx);
              setCurHover(null);
            }}
            style={{
              backgroundColor:
                idx === curHover
                  ? Gray[500].value
                  : idx === curTab
                  ? Primary.value
                  : White.value,
            }}
          >
            <Icon
              icon={el.icon}
              color={
                idx === curHover
                  ? Secondary.value
                  : idx === curTab
                  ? White.value
                  : Black.value
              }
              style={{ flex: "0 0 auto", marginRight: "16px" }}
            />
            <LabelText
              children={el.label}
              style={{
                color:
                  idx === curHover
                    ? Secondary.value
                    : idx === curTab
                    ? White.value
                    : Black.value,
                flex: 1,
              }}
            />
            <LabelText
              children={el.count > 0 ? el.count : ""}
              style={{ color: Negative.value, flex: "0 0 auto" }}
            />
          </Container>
        ))}
      {!title && (
        <Container
          onMouseEnter={() => setCurHover(0)}
          onMouseLeave={() => setCurHover(null)}
          onClick={() => {
            setCurTab(0);
            setCurHover(null);
          }}
          style={{
            backgroundColor:
              0 === curHover
                ? Gray[500].value
                : 0 === curTab
                ? Primary.value
                : White.value,
          }}
        >
          <Icon
            icon={icon}
            color={
              0 === curHover
                ? Secondary.value
                : 0 === curTab
                ? White.value
                : Black.value
            }
            style={{ flex: "0 0 auto", marginRight: "16px" }}
          />
          <LabelText
            children={label}
            style={{
              color:
                0 === curHover
                  ? Secondary.value
                  : 0 === curTab
                  ? White.value
                  : Black.value,
              flex: 1,
            }}
          />
          <LabelText
            children={count > 0 ? count : ""}
            style={{ color: Negative.value, flex: "0 0 auto" }}
          />
        </Container>
      )}
    </div>
  );
};
