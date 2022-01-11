import React from 'react';

class App extends React.Component {
  render() {
    return(<div>
      <div>
        <h1>GitHub Info</h1>
        <input value='Github Handle' />
        <button>Search</button>
      </div>
      <div>
        <div>
          <img width='200' src="https://avatars.githubusercontent.com/u/92415478?v=4"/>
        </div>
        <div>
          <h2>Brittany Petersen</h2>
          <p>(bio)</p>
          <h4>Total Repos: </h4>
          <h4>Total Followers: </h4>
        </div>
      </div>
      <div>
        <div className='followers-list'>
          <h2>Followers:</h2>
        </div>
        <div className='follower'>
          <div className='follower-img'>
            <img width='100' src="https://avatars.githubusercontent.com/u/22600370?v=4" />
          </div>
          <div className='follower-name'>
            <h4>Handle: </h4>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default App;
