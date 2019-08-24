import React from "react";
import axios from "axios";

import PostsList from "./PostsList";

class Dashboard extends React.Component {
  state = {
    users: [],
    selectedUser: null
  };

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then(result => {
      this.setState({
        users: result.data,
        selectedUser: result.data[0]
      });
    });
  }

  changeSelectedUser = user => {
    this.setState({ selectedUser: user });
  };

  render() {
    const { users, selectedUser } = this.state;
    return (
      <div className="container">
        <div className="row">
          <section className="col-sm">
            {users.length === 0 ? (
              "Loading..."
            ) : (
              <ul className="list-group">
                {users.map((user, index) => {
                  return (
                    <li
                      key={user.id}
                      className={`list-group-item ${
                        user.id === selectedUser.id ? "active" : ""
                      }`}
                      onClick={() => {
                        this.changeSelectedUser(user);
                      }}
                    >
                      {user.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
          <section className="col-md">
            {selectedUser !== null && <PostsList user={selectedUser} />}
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
