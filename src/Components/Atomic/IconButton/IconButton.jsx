import React from "react";
import styled from "styled-components";
import constants from "../../../config/constants";

const IconButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: ${(props) =>
    props.borderColor ? `1px solid ${(props) => props.borderColor}` : "none"};
  cursor: pointer;
`;

const IconButton = ({ hasBorder, children }) => {
  const borderColor = constants.theme.palette.borderColor;

  return (
    <IconButtonStyled borderColor={hasBorder ? borderColor : null}>
      {children}
    </IconButtonStyled>
  );
};

export default IconButton;
