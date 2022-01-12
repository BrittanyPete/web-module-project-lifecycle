import React from 'react';
import Follower from './Follower.js';


class FollowerList extends React.Component {


    render() {
        return (
          <div className='followers'>
            <div>
              <h2>Followers:</h2>
            </div>
            <div className="followers-list">
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