import React from 'react';
import User from './components/User.js';
import FollowerList from './components/FollowerList.js';



class App extends React.Component {
  render() {
    return(<div>
      <div>
        <h1>GitHub Info</h1>
        <input value='Github Handle' />
        <button>Search</button>
      </div>
      <User />
      <FollowerList />
    </div>);
  }
}

export default App;
