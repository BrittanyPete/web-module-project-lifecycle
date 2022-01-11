import React from 'react';

class User extends React.Component {
    render() {
        return (
          <div>
            <div>
              <img
                width="200"
                src="https://avatars.githubusercontent.com/u/92415478?v=4"
              />
            </div>
            <div>
              <h2>Brittany Petersen</h2>
              <p>(bio)</p>
              <h4>Total Repos: </h4>
              <h4>Total Followers: </h4>
            </div>
          </div>
        );
    }
}

export default User;