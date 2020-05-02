import React from  'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from  './VideoDetail';

class App extends React.Component{
    state = {videos :[], selectedVideo : null}; //if access at the beginning of app, it will give you 0 length. Better then set it to null;

    componentDidMount(){
        //set a default action when page is first time load.
        this.onTermSubmit('React');
    }

    onTermSubmit=async (term)=>{
        //console.log(term);
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })
        // console.log(response);
        this.setState({
            videos: response.data.items,
            //set default selected video to videoplayer
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) =>{
        // console.log('From the App!', video);
        this.setState({selectedVideo : video});
    }

    render(){
        //onFormSubmit is user defined parameter.
        return (<div className = "ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className = "five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>);
    };
}

export default App;
