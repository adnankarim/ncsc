import React,{useState} from 'react';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import {Animated} from "react-animated-css";
import ScrollLink from '../components/utils/scrollLink';
import Heading from '../components/UI/heading';
import {
  Contained,
  StyledSection,
  Wrapper,
} from '../components/layout/elements';
import TeamPage from './Team/team';
import Button from '../components/UI/button';
import useWindowDimensions from '../components/CustomHooks/useWindowDimensions';
// Team data entry
const imgUrl= ["OurTeam/p1.png","OurTeam/p2.png","OurTeam/p3.png","OurTeam/p4.png","OurTeam/p5.png","OurTeam/p6.png"];
const obsName=["Asad Munir","Shaheryar Ehsan-i-Haque","Syed Shaharyaar Hussain","Zain-ul-Islam","Azka Yamin","Zain Farooq Gill"];
const ObsDesignation=["Vice President","President", "Joint Secretory","Treasurer","Press Secretory","General Secretory"];

const AboutText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.8;
  width: 85%;
  margin: 2% auto 0%;
  text-align: center;
  transition: color 0.2s ease-out;

  & em {
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;
  }

  & a {
    text-decoration: underline;
    color: var(--text-highlight);
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 90%;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
    width: 95%;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 100%;
  }
`;

const CustomSpan = styled.span`
  position: relative;
  font-style: italic;
  color: var(--white);
  font-weight: 600;
  display: inline-block;
  word-break: break-word;
  white-space: normal;

  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-2deg);
    background: var(--primary);
  }
`;

const StackTitle = styled.h2`
  font-weight: 600;
  color: var(--text-highlight);
  margin-top: 5rem;
  font-size: 2rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.9rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.8rem;
  }
`;

const Stack = styled.p`
  color: var(--primary);
  width: 75%;
  margin: 0 auto;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 700;

  @media ${props => props.theme.mediaQueries.small} {
    width: 90%;
    font-size: 1.3rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.2rem;
  }
`;




// Takes custom components from markdown, and maps to my custom components
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: { 'scroll-link': ScrollLink, span: CustomSpan },
}).Compiler;

const About = () => {
  const { height, width } = useWindowDimensions();
  const [booleanView, setBooleanView] = useState(false);
  const {value:darkMode} = useDarkMode(false);

  const { aboutUs, siteUrl } = useStaticQuery(graphql`
    query {
      aboutUs: file(relativePath: { eq: "aboutUs.md" }) {
        childMarkdownRemark {
          frontmatter {
            mission
            
          }
          htmlAst
        }
      }
      siteUrl: site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <StyledSection id="team">
      <Contained>
        <Wrapper>
          <Heading
            title="Our Team"
            subtitle="If you’re <span>wondering</span> who <span>We are</span>…"
          />
          <TeamPage
           imgUrl={imgUrl}
           name={obsName}
           description={ObsDesignation}
           president={true}
           darkMode={darkMode}
           width={width}
          />
          <> {
             booleanView===true ?
             (
              
             <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <TeamPage
              imgUrl={imgUrl.slice(3, 6)}
              name={obsName.slice(3, 6)}
              description={ObsDesignation.slice(3, 6)}
              president={false}
              darkMode={darkMode}
              width={width}
             />
              </Animated>
             ):
             null
           }

           </>
        <>
         {  booleanView===false?
          (<Button   onClick={()=>{setBooleanView(!booleanView)}}>View More</Button>):
          (<Button onClick={()=>{setBooleanView(!booleanView)}}>Collapse View</Button>) 
        
        }
        </>
          <AboutText>
            {renderCustom(aboutUs.childMarkdownRemark.htmlAst)}
            <StackTitle>
               <CustomSpan>Our Mission</CustomSpan> 
            </StackTitle>
            <Stack>{aboutUs.childMarkdownRemark.frontmatter.mission}</Stack>
          </AboutText>
         
              
           
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default About;
