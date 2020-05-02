import React from 'react';
import VideoItem from './VideoItem';

//const VideoList = props => {
//Use ES2015 JS, assign videos to instend of props. so we can use videos in the below directly.
const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;