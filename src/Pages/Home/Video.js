import React from 'react';

import ReactPlayer from 'react-player/youtube'
const Video = () => {
    return (
        <div>
            <h1> video player</h1>
            <ReactPlayer url='https://www.youtube.com/watch?v=1dDK_N909Xo&t=44s' />
        </div>
    );
};

export default Video;