import React, { Component } from 'react';
import * as actions from '../actions/action_index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class todoInput extends Component {

  insertTodo(e) {
    e.preventDefault();
    const { value } = this.input;
    if(value !== '') {
      this.props.addTodo(value);
      this.input.value = '';
    } else {
      alert('You must enter a todo!');
    }
  }

  render() {
    return (
      <section className="todo-input">
        <form onSubmit={this.insertTodo.bind(this)}>
          <input type="text" ref={(inp) => this.input = inp} placeholder="Enter a todo..." />
          <button className="add-btn" type="submit">Add</button>
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
