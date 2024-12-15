import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";
import VisuallyHidden from "../VisuallyHidden";

const LeftActionGroup = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  );
};

const RightActionGroup = () => {
  return (
    <ActionGroup>
      <button>
        <User size={24} />
      </button>
    </ActionGroup>
  );
};

const SubscribeSection = () => {
  return (
    <SubscribeSectionWrapper>
      <Button>
        <VisuallyHidden>This is the subscribe button</VisuallyHidden>
        subscribe
      </Button>

      <Link>Already a subscriber? </Link>
    </SubscribeSectionWrapper>
  );
};

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <LeftActionGroup />
          <RightActionGroup />
        </Row>
      </SuperHeader>
      <MainHeader>
        <LeftColumn>
          <LeftActionGroup />
        </LeftColumn>

        <MiddleColumn>
          <Logo />
        </MiddleColumn>

        <RightColumn>
          <SubscribeSection />
        </RightColumn>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media screen and ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */

  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media screen and ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media screen and ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;

    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const LeftColumn = styled.span`
  display: none;

  @media screen and ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const MiddleColumn = styled.span``;

const RightColumn = styled.span`
  display: none;

  @media screen and ${QUERIES.laptopAndUp} {
    display: block;
    justify-self: end;
  }
`;

const SubscribeSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const Link = styled.a`
  font-size: calc(1rem * 14 / 16);
  color: var(--color-gray-900);
  border-bottom: solid;
  font-style: italic;
  width: fit-content;
  line-height: 1;
`;

export default Header;
