import React from 'react';
import '../Vendor/Animated.css';
import Layout from '../components/layout/layout';
import Gallery from '../components/Gallery/Gallery';
// Sections
import Home from '../sections/home';
import About from '../sections/about';
import Event from '../sections/event';
import Contact from '../sections/contact';
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
const IndexPage = () => (
  <Layout>
    <Helmet>
    <script src={withPrefix('anime.min.js')} type="text/javascript" />
    <script src={withPrefix('imagesloaded.pkgd.min.js')} type="text/javascript" />
    <script src={withPrefix('uncover.js')} type="text/javascript" />
    <script src={withPrefix('demo3.js')} type="text/javascript" />
    </Helmet>
    <Home />
    <Event  mode="timeline" title="Events" title/>
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
