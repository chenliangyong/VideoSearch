import React from  'react';

const VideoDetail = (props) =>{
    //console.log(props.video);
    //destructure the 'props' to 'video' directly. So we don't need to write 'props.video' again and again.

    if (!props.video){
        return (
            <div>
                <h4 className = "ui Header">Loading...</h4>
            </div>
        );
    }

    const videoSrc =`https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
        <div>
            <div className = "ui embed">
                <iframe title="VideoPlayer" src={videoSrc} />>
            </div>
            <div className = "ui segment">
                <h4 className = "ui Header">{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;