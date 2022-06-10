import React from 'react';
import About from './About';
import Contact from './Contact';
import Personal from './Personal';
import Projects from './Projects';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <Personal></Personal>
           <About></About>
           <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;