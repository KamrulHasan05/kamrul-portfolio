import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <main>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;