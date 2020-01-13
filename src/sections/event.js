import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline/Timeline';
import Heading from '../components/UI/heading';
import useDarkMode from 'use-dark-mode';

import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';

const PortfolioWrapper = styled.div`
  width: 100%;

  & > div:nth-child(odd) > div {
    flex-direction: row-reverse;
  }
`;

const Event = () => {
  const {value:darkMode} = useDarkMode(false);


  return (
    <StyledSection id="events">
      <Contained>
        <Wrapper>
          <Heading
            title="Events"
            subtitle={`Check <span>what</span> We've been doing <span>lately</span>`}
          />
          <PortfolioWrapper>
              <Timeline
               darkMode={darkMode}

              />
          </PortfolioWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Event;
