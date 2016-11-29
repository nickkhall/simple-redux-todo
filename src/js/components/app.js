import React, { Component } from 'react';

import Header from './Header';
import TodoInput from './todoInput';
import TodoTable from './todoTable';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoInput />
        <TodoTable />
      </div>
    )
  }
}
