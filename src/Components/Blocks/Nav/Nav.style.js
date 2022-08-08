import styled from "styled-components";

export const StyledNavContainer = styled.div`
  height: ${(props) => props.height};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid ${(props) => props.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${(props) => props.horizontalPadding};
`;

export const ToolbarHeightAdjust = styled.div`
  height: ${(props) => props.height};
`;

export const Links = styled.ul`
  list-style: none;
  flex-grow: 1;
  display: flex;
`;

export const Link = styled.li``;

export const IconImg = styled.img``;

export const LogoImg = styled.img`
  margin-right: 7.7%;
`;
