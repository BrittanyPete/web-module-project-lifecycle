import React from 'react';
import Follower from './Follower.js';


class FollowerList extends React.Component {
    render() {
        return (
          <div>
            <div className="followers-list">
              <h2>Followers:</h2>
            </div>
            <Follower />
          </div>
        );
    }
}

export default FollowerList;