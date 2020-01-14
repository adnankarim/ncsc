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

const Event = (props) => {
  const {value:darkMode} = useDarkMode(false);


  return (
    <StyledSection id="events">
      <Contained>
        <Wrapper>
          <Heading
            mode={props.mode}
            title={props.title}
            subtitle={props.subtitle}
          />
          <PortfolioWrapper>
         {  props.mode==='timeline'?
             ( <Timeline
               darkMode={darkMode}

              />
              ):
              ( <props.Element></props.Element>)}
          </PortfolioWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Event;
