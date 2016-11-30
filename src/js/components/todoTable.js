import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action_index';

class todoTable extends Component {
  showTodos() {
    console.log('this props: ', this.props);
    const prop = this.props.state.todos.item;

    if(!this.props.state.todos.hasOwnProperty('item')) {
      return (
        <h1 className="no-todos">You have no todo&apos;s at the moment.</h1>
      )
    } else {
        return (
          <li className="todo-li" key={prop._id}>
            { prop.text }
            <img src="../../src/styles/imgs/white-trash-can.svg" className="trash-can" />
          </li>
        )
      }
  }

  render() {
    return (
      <section className="todo-container">
        <ul>
          { this.showTodos() }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state: ', state);
  console.log('props: ', ownProps);
  return { state };
};

export default connect(mapStateToProps, actions)(todoTable);
