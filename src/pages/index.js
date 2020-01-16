import React, { useState }  from 'react';
import '../Vendor/Animated.css';
import Layout from '../components/layout/layout';
import GalleryWrapper from '../components/Gallery/GalleryWrapper';
// Sections
import Home from '../sections/home';
import About from '../sections/about';
import Event from '../sections/event';
import Contact from '../sections/contact';
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function scrollTo(e) {
  scroller.scrollTo(`${e}`, {
    duration: 1200,
    delay: 0.5,
    smooth: 'easeInOutQuart'
  })
}




const IndexPage = () => {
  const [displayGallery, setDisplayGallery] = useState('none');
  const handleGalleryChange =(e)=>{
    e.preventDefault();
        setDisplayGallery(e.target.value);
        e.target.value==='close'?
        (scrollTo('top'))
        :
       ( scrollTo('scrol'))


         
  };

return (
  <Layout>
    <Home />

    <div name='top'>
      {" "}
      <Event
        displayGallery={displayGallery}
        handleChange={handleGalleryChange}
        mode='timeline'
        title='Events'
        title
      />
    </div>
    <div name='scrol' id='scrollbg'>
      {displayGallery === "ethhacking" ? (
        <>
          <Helmet>
            <script src={withPrefix("anime.min.js")} type='text/javascript' />
            <script
              src={withPrefix("imagesloaded.pkgd.min.js")}
              type='text/javascript'
            />
            <script src={withPrefix("uncover.js")} type='text/javascript' />
            <script src={withPrefix("demo3.js")} type='text/javascript' />
          </Helmet>

          <GalleryWrapper
            title='ETHHACKING'
            subtitle='Few Glimpses of the Workshop'
          />
        </>
      ) : displayGallery === "cryptoshop" ? (
      
        <>
        <Helmet>
          <script src={withPrefix("anime.min.js")} type='text/javascript' />
          <script
            src={withPrefix("imagesloaded.pkgd.min.js")}
            type='text/javascript'
          />
          <script src={withPrefix("uncover.js")} type='text/javascript' />
          <script src={withPrefix("demo3.js")} type='text/javascript' />
        </Helmet>

        <GalleryWrapper
          title='CRYPTOSHOP'
          subtitle='Few Glimpses of the Workshop'
        />
      </>
      
        
      ) : displayGallery === "hack attack" ? (
        <>
          <Helmet>
            <script src={withPrefix("anime.min.js")} type='text/javascript' />
            <script
              src={withPrefix("imagesloaded.pkgd.min.js")}
              type='text/javascript'
            />
            <script src={withPrefix("uncover.js")} type='text/javascript' />
            <script src={withPrefix("demo3.js")} type='text/javascript' />
          </Helmet>

          <GalleryWrapper
          title='HACK ATTACK'
          subtitle='Few Glimpses of the Workshop'
        />
        </>
        
        
       
      ) : (
        <></>
      )}
    </div>
    <About />
    <Contact />
  </Layout>
);
};


export default IndexPage;
