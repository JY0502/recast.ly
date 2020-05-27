var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query || 'dogs',
      maxResults: options.max || 5,
      key: options.key,
      type: video,
      videoEmbeddable: true,
      part: 'snippet'
    },
    success: function (data) {
      callback(data);
      console.log('Success');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Error', data);
    }
  });
};

export default searchYouTube;

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=[AIzaSyCK8EuXfAopRlZEACoZuv1DbpaATzorptc]