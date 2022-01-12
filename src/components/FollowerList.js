import React from 'react';
import axios from 'axios';
import Follower from './Follower.js';


class FollowerList extends React.Component {


    render() {
        return (
          <div>
            <div className="followers-list">
              <h2>Followers:</h2>
            </div>
            <div>
                {
                    this.props.followersList.map(follower => {
                        return (
                            // console.log(follower)
                            <Follower follower={follower} key={follower.login}  />
                        )
                    })
                }
            </div>
          </div>
        );
    }
}

export default FollowerList;