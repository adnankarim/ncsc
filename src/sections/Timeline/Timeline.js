import React, { useState, useContext } from "react";
import Button from "../../components/UI/button";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import "./Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faRedhat } from "@fortawesome/free-brands-svg-icons";
import {
  faUserSecret,
  faKey,
  faImages,
faTimes} from "@fortawesome/free-solid-svg-icons";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Color = "#1aa5d1";

const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;
  }
`;
const StyledIconClose = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 2.2rem;
  transition: color 0.2s ease-out;
  

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;
  }
`;

const Timeline = props => {
  
  return (
    <>
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Nov 9, 2019'
          iconStyle={{ background: "#FFCF96", color: Color }}
          icon={<StyledIcon icon={faRedhat} />}
        >
          <h1 className='vertical-timeline-element-title'>ETHHACKING</h1>
          <h5 className='vertical-timeline-element-subtitle'>
            COMPUTING LAB 1, SEECS
          </h5>
          <p>
            Whenever the word 'hacking' befalls our ears, we instinctively think
            of something that is unlawful or prohibited. However, few of us know
            about 'Ethical Hacking'.
          </p>
          <div className='gbdiv'>
            <Button title="Gallery" onClick={props.handleChange} value='ethhacking'>
              <StyledIcon icon={faImages} />
            </Button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='April 24, 2019'
          iconStyle={{ background: "#e27474", color: Color }}
          icon={<StyledIcon icon={faKey} />}
        >
          <h1 className='vertical-timeline-element-title'>CRYPTOSHOP</h1>
          <h5 className='vertical-timeline-element-subtitle'>LAB, SEECS</h5>
          <p>
            Though you might not be aware of it, you encounter cryptography
            multiple times in your day. For all we know, you may have even used
            cryptography to send ‘secret’ notes to your friends in school and
            might even still do. But wouldn’t you want to learn more about
            something you’ve obliviously made use of all your life.
          </p>
          <div className='gbdiv'>
            <Button to title="Gallery" onClick={props.handleChange} value='cryptoshop'>
              <StyledIcon icon={faImages} />
            </Button>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='March 18, 2019'
          iconStyle={{ background: "	#ff9966", color: Color }}
          icon={<StyledIcon icon={faUserSecret} />}
        >
          <h1 className='vertical-timeline-element-title'>HACK ATTACK</h1>
          <h5 className='vertical-timeline-element-subtitle'>
            SEECS SEMINAR HALL
          </h5>
          <p>
            Do you worry about the safety of your private information stored in
            gadgets or online? Worried that the Bad guys might hack and retrieve
            your information. Then in the world of Bad hackers, become an
            “ethical Hacker” saving others from cyber mishaps. Oh! You don’t
            know how to become an ethical hacker? Well, worry not because NUST
            Cyber security club has got you covered.
          </p>
          <div className='gbdiv'>
            <Button title="Gallery" onClick={props.handleChange} value='hack attack'>
              <StyledIcon icon={faImages} />
            </Button>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#36A6BA" }}
          icon={<StyledIcon icon={faStar} />}
        />
        
      </VerticalTimeline>
    { console.log(props.displayGallery),
    
    (props.displayGallery==='close')||(props.displayGallery==='none')?
      
     (
         <></>

       )
       :
       (<div className="close-btn-container">
      <Button className='close-btn' value='close' title='Close Gallery' onClick={props.handleChange} ><StyledIconClose icon={faTimes} /></Button>
       </div>)
       
       
       }
    </>
  );
};

export default Timeline;
