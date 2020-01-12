import React from 'react';
import styled from 'styled-components';

import Heading from '../components/UI/heading';
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
  

  return (
    <StyledSection id="events">
      <Contained>
        <Wrapper>
          <Heading
            title="Events"
            subtitle={`Check <span>what</span> We've been doing <span>lately</span>`}
          />
          <PortfolioWrapper>
           
          </PortfolioWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Event;
