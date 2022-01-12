import React from 'react';
import axios from 'axios';


import User from './components/User.js';
import FollowerList from './components/FollowerList.js';



class App extends React.Component {
  state = {
    currentUser: 'BrittanyPete',
    user: {},
    followersList: [],
  }

  componentDidMount() {
    console.log('App is mounted');
    // //get user axios call
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
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
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(resp => {
        console.log(resp.data);
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

  handleSearch = (evt) => {
    evt.preventDefault();
    // const handle = this.state.handle;

    // // axios.get(`https://api.github.com/users/${handle}`)
    // //   .then(resp => {
    // //     // console.log('handleSearch resp: ', resp)
    // //     this.setState({
    // //       ...this.state,
    // //       followersList: resp.data,
    // //     })
    // //   })
    // //   .catch(err => {
    // //     console.log(err);
    // //   })
    // axios.get(`https://api.github.com/users/wlongmire/followers`)
    // .then(resp => {
    //   console.log('handleSearch api:', resp);
    //   // this.setState({
    //   //   ...this.state,
    //   //   followersList: resp.data
    //   // })
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }



  render() {
    console.log('App is rendering');
    return(<div>
      <div>
        <h1>GitHub Info</h1>
        <input onChange={this.handleChange} placeHolder='Github Handle' value={this.state.handle} />
        <button onClick={this.handleSearch} >Search</button>
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
