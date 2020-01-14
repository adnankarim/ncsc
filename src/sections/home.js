import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useSpring, animated, config } from 'react-spring';
import StyledHeader from '../components/styledheader/styledheader'
import {
  Contained,
  StyledSection,
  Wrapper
} from '../components/layout/elements';
import ScrollDown from '../components/UI/scrollDown';
import Button from '../components/UI/button';
import WordsFading from '../components/UI/wordsFading';
import '../sections/Timeline/Timeline.css';
const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Title = styled(animated.h1)`
  font-weight: 200;
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 7rem;
  color: #dadada;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 6rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 4.5rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 4rem;
  }

  & span {
    font-weight: 600;
    color: var(--primary-light);
    transition: color 0.2s ease-out;
  }
`;

const SubTitle = styled(animated.h2)`
  color: #dadada;
  font-weight: 400;
  margin: 0;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.5rem;
  }
`;

const Home = () => {
  // Title animation
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  // Sub title animation
  const SubTitleSpring = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  });

  // Button animation
  const ButtonSpring = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <StyledSection fullHeight id="home">
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title style={TitleSpring}>
              Welcome{' '}
              <span >
              To
              </span>
              
              ,
              <br />
              <StyledHeader/>
              Nust Cyber Security <span>Club</span>
            </Title>
            <SubTitle style={SubTitleSpring}>
              Full of <WordsFading  /> people  
            </SubTitle>
            <Link to="events" spy={true} smooth={true}>
              <Button style={ButtonSpring}>Show More</Button>
            </Link>
          </SmallWrapper>
        </Wrapper>
      </Contained>
      <ScrollDown />
    </StyledSection>
  );
};

export default Home;
