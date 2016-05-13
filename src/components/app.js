import React from 'react';
import { Component } from 'react';
import UserList from './user_list';

export default class App extends Component {
  render() {
    return (
      <div>
				<h2>Users</h2>
				<UserList />
			</div>
    );
  }
}
