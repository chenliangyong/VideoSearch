import React from  'react';

class VideoDetail extends React.Component {
    constructor(props){
        super(props);
        this.divRef = React.createRef();
    }

    componentDidMount = () => {
        if (this.props.video){
            console.log("I am in did mount");
            this.divRef.current.addEventListener('load', this.setHeight);
        }
    }

    setHeight = () => {
        console.log("I am in Set height");
        console.log(window.document.getElementById('VideoPlayer').offsetHeight)
    }

    render(){
        if (!this.props.video){
            console.log("firstload");
            return (
                <div id = "VideoPlayer">
                    <h4 className = "ui Header">Loading...</h4>
                </div>
            );
        }else{
            const videoSrc =`https://www.youtube.com/embed/${this.props.video.id.videoId}`;
            return (
                <div id = "VideoPlayer">
                    <div className = "ui embed">
                        <iframe title="VideoPlayer" src={videoSrc} />>
                    </div>
                    <div className = "ui segment">
                        <h4 className = "ui Header">{this.props.video.snippet.title}</h4>
                        <p>{this.props.video.snippet.description}</p>
                    </div>
                </div>
            );
        }
    }
};

export default VideoDetail;