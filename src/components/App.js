import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../APIs/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetails'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { videos: [], selectedVideo: null }
    //so to show to the default video
    this.onTermSubmit('')
  }
  onTermSubmit = async term => {
    const res = await youtube.get('/search', { params: { q: term } })
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
  }
  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        {' '}
        <SearchBar onSubmitForm={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
