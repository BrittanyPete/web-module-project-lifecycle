import React from 'react';
import axios from 'axios';

import './index.css';
import User from './components/User.js';
import FollowerList from './components/FollowerList.js';



class App extends React.Component {
  state = {
    handle: 'BrittanyPete',
    user: {},
    followersList: [],
  }

  componentDidMount() {
    // console.log('App is mounted');
    // //get user axios call
    axios.get(`https://api.github.com/users/${this.state.handle}`)
      .then(resp => {
        // console.log(resp.data)
        this.setState({
          ...this.state,
          user: resp.data
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user) {
    axios.get(`https://api.github.com/users/${this.state.handle}/followers`)
      .then(resp => {
        // console.log(resp.data);
        this.setState({
          ...this.state,
          followersList: resp.data
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      handle: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    // const handle = this.state.handle;
    axios.get(`https://api.github.com/users/${this.state.handle}`)
      .then(resp => {
        // console.log(resp.data)
        this.setState({
          ...this.state,
          user: resp.data
        });
      });
  }



  render() {
    // console.log('App is rendering');
    return(
    <div className='container'>
      <div className='header'>
        <h1>GitHub Info</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.handle} />
          <button>Search</button>
        </form>

      </div>
      <div>
        <User user={this.state.user} />
      </div>
      <div>
        <FollowerList followersList={this.state.followersList}/>
      </div>
    </div>);
  }
}

export default App;
