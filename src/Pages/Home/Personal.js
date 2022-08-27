import React from 'react';
import { useSpring, animated } from 'react-spring';
import programming from '../../images/programming.jpg'
const Personal = () => {
  const styles = useSpring({
    from: { x: 0 },
    config: { duration: 1000 },
    loop: {
      x: 100,
    },
  })
  const programmings = useSpring({
    from: { x: 100 },
    config: { duration: 1000 },
    loop: {
      x: 0,
    },
  })

    return (
        <div  class="hero min-h-screen shadow-xl">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <animated.img src={programming} style={programmings} class="max-w-sm lg:ml-32 w-60 h-60 lg:w-fit rounded-lg shadow-2xl" alt=''/>
    <animated.div style={styles} class="mr-24">
        <p class="text-xl text-white font-bold">Hello,</p>
      <h1 class="lg:text-3xl  text-white font-bold">I'm Arif Islam</h1>
       <p class=" text-slate-900 text-xl font-bold" >Front-end Developer</p>
      <button class="btn btn-sm btn-outline btn-success  font-bold text-white ">Hire me</button>
    </animated.div>
  </div>
</div>
    );
};

export default Personal;