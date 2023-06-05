import styled, { css } from "styled-components";

export interface AbButtonProps {
  text?: string;
  tipo?: "primary" | "secondary";
  onClick?: () => void;
}

const StylizedButton = styled.button<AbButtonProps>`
  background: ${(props: AbButtonProps) =>
    props.tipo === "primary" ? "#e89b00" : "#fff"};
  padding: 16px 32px;
  border: 2px solid #e89b00;
  color: #fff;
  color: ${(props: AbButtonProps) =>
    props.tipo === "primary" ? "#fff" : "#e89b00"};
  font-size: 20px;
  cursor: pointer;
  ${(props: AbButtonProps) =>
    props.tipo === "primary"
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;

export const AbButton = ({
  text,
  onClick,
  tipo = "primary",
}: AbButtonProps) => {
  return (
    <StylizedButton onClick={onClick} tipo={tipo}>
      {text}
    </StylizedButton>
  );
};
