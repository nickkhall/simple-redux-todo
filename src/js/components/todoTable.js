import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action_index';

class todoTable extends Component {
  showTodos() {
    console.log('this props: ', this.props);
    const { items } = this.props.state.todos;

    if(items.length < 1) {
      return (
        <h1 className="no-todos">You have no todo&apos;s at the moment.</h1>
      )
    } else {
        return items.map( prop =>
          <li onClick={() => this.props.toggleTodo(prop.id)} className={"todo-li" + (
            prop.completed ? ' completedLi' : ''
          )} key={prop.id}>
            { prop.text }
            <img src="../../src/styles/imgs/white-trash-can.svg" className="trash-can" onClick={() => this.props.deleteTodo(prop.id)} />
          </li>
        );
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
