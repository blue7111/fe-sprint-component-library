import { useState, useEffect } from "react";
import { HeadingText } from "./atoms/Typography";
import { BodyText } from "./atoms/Typography";
import { Button } from "./buttons/Button";
import { Icon } from "./atoms/Icon";
import { styled, keyframes } from "styled-components";
import globalToken from "../../tokens/global.json";

const { White, Positive, Yellow, Negative, borderRadius, Gray, boxShadow } =
  globalToken;
const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ToastContainer = styled.div`
  background-color: ${White.value};
  border-radius: ${borderRadius[8].value}px;
  display: flex;
  align-items: center;
  padding: 24px 16px;
  border-left: 8px solid;
  box-shadow: ${boxShadow.modal.x.value}px ${boxShadow.modal.y.value}px
    ${boxShadow.modal.blur.value}px ${boxShadow.modal.spread.value}px
    ${boxShadow.modal.color.value};
`;

const ToastsContainer = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;

  ${({ position }) => {
    if (position === "top-left") {
      return `
        top: 10px;
        left: 10px;
      `;
    } else if (position === "top-right") {
      return `
        top: 10px;
        right: 10px;
      `;
    } else if (position === "bottom-left") {
      return `
        bottom: 10px;
        left: 10px;
      `;
    } else if (position === "bottom-right") {
      return `
        bottom: 10px;
        right: 10px;
      `;
    } else {
      return `
        top: 10px;
        left: 10px;
      `;
    }
  }}
`;

export const Toast = ({ duration, position, level, title, detail }) => {
  const [toast, setToast] = useState([]);

  const addToast = (duration, level) => {
    const newToast = { duration, level };
    setToast((prev) => [...prev, newToast]);
  };

  const removeToast = (index) => {
    setToast((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const removeToast = () => {
      setToast((prev) => prev.slice(1));
    };

    if (toast.length > 0) {
      const timerId = setTimeout(removeToast, toast[0].duration);
      return () => clearTimeout(timerId);
    }
  }, [toast]);

  return (
    <>
      {duration && (
        <>
          <BtnContainer>
            <Button
              primary={true}
              label="Success Toast"
              onClick={() => addToast(duration, "success")}
            />
            <Button
              primary={true}
              label="Error Toast"
              onClick={() => addToast(duration, "error")}
            />
            <Button
              primary={true}
              label="Warning Toast"
              onClick={() => addToast(duration, "warning")}
            />
          </BtnContainer>
          <ToastsContainer position={position} style={{ position: "absolute" }}>
            {toast.map((t, index) => (
              <ToastContainer
                key={index}
                style={{
                  borderColor:
                    t.level === "success"
                      ? Positive.value
                      : t.level === "error"
                      ? Negative.value
                      : t.level === "warning"
                      ? Yellow.value
                      : null,
                }}
                duration={t.duration}
              >
                <div>
                  <HeadingText
                    children={
                      t.level === "success"
                        ? "Success"
                        : t.level === "error"
                        ? "Error"
                        : t.level === "warning"
                        ? "Warning"
                        : null
                    }
                  />
                  <BodyText
                    children={
                      "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                    }
                  />
                </div>
                <div>
                  <Icon
                    size={40}
                    icon="X"
                    color={Gray[700].value}
                    onClick={() => removeToast(index)}
                  />
                </div>
              </ToastContainer>
            ))}
          </ToastsContainer>
        </>
      )}

      {level && (
        <ToastContainer
          style={{
            borderColor:
              level === "success"
                ? Positive.value
                : level === "error"
                ? Negative.value
                : level === "warning"
                ? Yellow.value
                : null,
            position: "absolute",
          }}
        >
          <div>
            <HeadingText children={title} />
            <BodyText children={detail} />
          </div>
          <div>
            <Icon size={40} icon="X" color={Gray[700].value} />
          </div>
        </ToastContainer>
      )}
    </>
  );
};
