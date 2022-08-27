import React from 'react';
import { animated, useSpring } from '@react-spring/web'
const Blogs = ({ isVisible}) => {
    
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24
  })
  
  return (
        <animated.div style={styles}>
            <h1 class="text-white text-xl text-center"> Coming soon</h1>
        </animated.div>
    );
};

export default Blogs;