import React from 'react';
import About from './About';
import Personal from './Personal';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Personal></Personal>
            <Projects></Projects>
           <About></About>
        </div>
    );
};

export default Home;