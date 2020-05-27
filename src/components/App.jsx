import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    //`states` go here
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  // handler events go here
  handleClickVideo(newVideo) {
    this.setState({
      currentVideo: newVideo
    });
    console.log(newVideo + ' was clicked');
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* video is a single object */}
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            {/* videos is the whole exampleVideoData array */}
            <VideoList handleClickVideo={this.handleClickVideo.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;