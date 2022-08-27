import React from 'react';

const Skill = () => {
    return (<div className="py-8 shadow-xl">
         <h1 className="text-3xl  font-bold text-center my-4 text-green-300">My Skill </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        <div className="mx-auto">
            <label className=" text-white font-bold ">HTML</label>
            <progress class="progress progress-error  w-80" value="90" max="100"></progress>
            <label className=" text-white font-bold ">CSS</label>
            <progress class="progress progress-error w-80" value="80" max="100"></progress>
            <label className=" text-white font-bold ">JavaScript</label>
            <progress class="progress progress-error  w-80" value="70" max="100"></progress>
            <label className=" text-white font-bold ">ES6</label>
            <progress class="progress progress-error  w-80" value="80" max="100"></progress>
            <label className=" text-white font-bold ">Bootstrap</label>
            <progress class="progress progress-error w-80" value="90" max="100"></progress>
            <label className=" text-white font-bold ">Tailwind</label>
            <progress class="progress progress-error  w-80" value="80" max="100"></progress>
        </div>
        <div className="mx-auto">
            <label className=" text-white font-bold ">React</label>
            <progress class="progress progress-error  w-80" value="75" max="100"></progress>
            <label className=" text-white font-bold ">React hooks</label>
            <progress class="progress progress-error  w-80" value="85" max="100"></progress>
            <label className=" text-white font-bold ">Firebase</label>
            <progress class="progress progress-error w-80" value="80" max="100"></progress>
            <label className=" text-white font-bold ">Node.js</label>
            <progress class="progress progress-error  w-80" value="65" max="100"></progress>
            <label className=" text-white font-bold ">Express.js</label>
            <progress class="progress progress-error w-80" value="70" max="100"></progress>
            <label className=" text-white font-bold ">MongoDB</label>
            <progress class="progress progress-error  w-80" value="75" max="100"></progress>
        </div>
        </div>
        </div>
    );
};

export default Skill;