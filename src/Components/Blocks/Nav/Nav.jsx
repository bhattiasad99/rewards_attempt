import React from "react";
import {
  StyledNavContainer,
  ToolbarHeightAdjust,
  LogoImg,
  IconImg,
} from "./Nav.style";
import constants from "../../../config/constants";
import IconButton from "../../Atomic/IconButton/IconButton";

const Nav = () => {
  const height = constants.templates.nav.height;
  const imgSrc = constants.assets.rewardsLogo;
  const projectName = constants.textTemplates.projectName;
  const primaryColor = constants.theme.palette.primary;
  const horizontalPadding = constants.templates.nav.paddingHorizontal;
  const navIcon = constants.assets.navIcon;

  return (
    <div>
      <StyledNavContainer
        primaryColor={primaryColor}
        height={height}
        horizontalPadding={horizontalPadding}
      >
        <LogoImg src={imgSrc} alt={`${projectName} logo`} />
        <IconButton hasBorder={false}>
          <IconImg src={navIcon} width="100%" height="100%" alt="icon" />
        </IconButton>
      </StyledNavContainer>
      <ToolbarHeightAdjust height={height}>&nbsp;</ToolbarHeightAdjust>
    </div>
  );
};

export default Nav;
