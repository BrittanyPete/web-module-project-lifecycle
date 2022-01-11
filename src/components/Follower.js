import React from 'react';

class Follower extends React.Component {
    render() {
        return (
          <div className="follower">
            <div className="follower-img">
              <img
                width="100"
                src="https://avatars.githubusercontent.com/u/22600370?v=4"
              />
            </div>
            <div className="follower-name">
              <h4>Handle: </h4>
            </div>
          </div>
        );
    }
}

export default Follower;