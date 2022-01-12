import React from 'react';

class Follower extends React.Component {

    render() {
        // console.log('follower is rendering');
        return (
          <div className="follower">
            <div className="follower-img">
              <img
                width="250"
                src={this.props.follower.avatar_url}
              />
            </div>
            <div className="follower-name">
                <a target='_blank' href={this.props.follower.html_url}><p>{this.props.follower.login}</p> </a>
            </div>
          </div>
        );
    }
}

export default Follower;