import React from 'react';

class User extends React.Component {
    render() {
        // console.log('User is rendering');
        return (
          <div className='user'>
            <div className='user-div'>
              <img
                width="200"
                src={this.props.user.avatar_url}
              />
            </div>
            <div className='user-div'>
              <a target='_blank' href={this.props.user.html_url}><h2>{this.props.user.name}</h2> </a>
              <p>({this.props.user.login})</p>
              <h4>Total Repos: {this.props.user.public_repos} </h4>
              <h4>Total Followers: {this.props.user.followers}</h4>
            </div>
          </div>
        );
    }
}

export default User;