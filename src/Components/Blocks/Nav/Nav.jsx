import React from "react";
import { StyledNavContainer, ToolbarHeightAdjust, LogoImg } from "./Nav.style";
import constants from "../../../config/constants";

const Nav = () => {
  const height = constants.templates.nav.height;
  const imgSrc = constants.assets.rewardsLogo;
  const projectName = constants.textTemplates.projectName;
  const primaryColor = constants.theme.palette.primary;
  const horizontalPadding = constants.templates.nav.paddingHorizontal;
  return (
    <div>
      <StyledNavContainer
        primaryColor={primaryColor}
        height={height}
        horizontalPadding={horizontalPadding}
      >
        <LogoImg src={imgSrc} alt={`${projectName} logo`} />s
      </StyledNavContainer>
      <ToolbarHeightAdjust height={height}>&nbsp;</ToolbarHeightAdjust>
    </div>
  );
};

export default Nav;
