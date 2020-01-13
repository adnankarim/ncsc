import React from 'react';
import '../Vendor/Animated.css';
import Layout from '../components/layout/layout';

// Sections
import Home from '../sections/home';
import About from '../sections/about';
import Event from '../sections/event';
import Contact from '../sections/contact';

const IndexPage = () => (
  <Layout>
    <Home />
    <Event />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
