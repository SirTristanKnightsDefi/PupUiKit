import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  banner?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 32px; // update with new banner
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, banner }) => {
  const isAbsoluteUrl = href.startsWith("http");
  if(isDark){
    banner = 'https://www.pupprotector.charity/wp-content/uploads/2023/03/msg5321545725-12202-1.jpg';
  } else {
    banner = 'https://www.pupprotector.charity/wp-content/uploads/2023/03/msg5321545725-12202-1.jpg';
  }

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pup Protector">
          <img
            src="https://www.pupprotector.charity/wp-content/uploads/2023/03/msg5321545725-12202-1.jpg"
            alt="PUP Logo"
            className="mobile-icon"
          />
          <img
            src={banner}
            alt="PUP Logo"
            className="desktop-icon"
          />
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pup Protector">
          <img
            src="https://www.pupprotector.charity/wp-content/uploads/2023/03/msg5321545725-12202-1.jpg"
            alt="PUP Logo"
            className="mobile-icon"
          />
          <img
            src={banner}
            alt="Pup Protector Logo"
            className="desktop-icon"
          />
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
