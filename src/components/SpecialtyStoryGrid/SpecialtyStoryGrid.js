import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media screen and ${QUERIES.tabletAndUp} {
    gap: 64px;
  }
  @media screen and ${QUERIES.laptopAndUp} {
    gap: 0;
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  @media screen and ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(165px, 100%), 1fr));
  gap: 16px;

  @media screen and ${QUERIES.laptopAndUp} {
    margin-top: 24px;
  }
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(165px, 100%), 1fr));
  gap: 16px;

  @media screen and ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    //overflow: auto;
  }

  @media screen and ${QUERIES.laptopAndUp} {
    margin-top: 24px;
  }
`;

//HEY JOSH! HERE YOU GO.
const SportsStoryWrapper = styled.div`
  //flex-basis: 220px;
  //flex-shrink: 0;
  min-width: 220px;
`;

export default SpecialtyStoryGrid;
