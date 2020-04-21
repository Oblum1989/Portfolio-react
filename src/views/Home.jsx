import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../assets/styles/views/Home.css';
import '../assets/styles/bootstrap.css';
import '../assets/styles/animate.css';

const Home = () => (
  <>
    <Header />
    <About />
    <Skills />
    <Education />
    <Portfolio />
    <Contact />
    <Footer />
  </>
);

export default Home;
