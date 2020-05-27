import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.example.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    //`states` go here
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      search: ''
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  // Function declarations
  handleClick(newVideo) {
    this.setState({
      currentVideo: newVideo
    });
    console.log(newVideo);
  }

  myChangeHandler(event) {
    this.setState({
      search: event.target.value
    });
    console.log(event);
  }


  getYouTubeVideos(query) {
    query = query || 'dogs';
    var options = {
      key: this.props.YOUTUBE_API_KEY,
      query: query
    };
    this.props.searchYouTube(options, data => {
      console.log("Data", data);
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('munkbang');
  }



  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search myChangeHandler={this.myChangeHandler} search={this.state.search}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* video is a single object */}
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            {/* videos is the whole exampleVideoData array */}
            <VideoList handleClick={this.handleClick} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
