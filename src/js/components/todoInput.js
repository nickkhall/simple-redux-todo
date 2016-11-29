import React, { Component } from 'react';
import * as actions from '../actions/action_index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class todoInput extends Component {

  insertTodo(e) {
    if(e.target.value !== '') {
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    const todoInput = this.refs.todoValue;
    console.log('todoInput: ', todoInput);
    const todoValue = todoInput.value;
    return (
      <section className="todo-input">
        <form>
          <input ref="todoValue" type="text" placeholder="Enter a todo..." />
          <button className="add-btn" type="submit" onClick={this.insertTodo()}>Add</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
console.log('actions: ', actions);

export default connect(mapDispatchToProps, actions)(todoInput);
