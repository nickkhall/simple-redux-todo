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
          <li
            onClick={() => this.props.toggleTodo(prop.id)}
            className={"todo-li" + (prop.completed ? ' completedLi' : '')}
            key={prop.id}
          >  
            { prop.text }
            <div className="status-container" onClick={ () => this.props.toggleInProgressTodo(prop.id) }>
              <img src="../../src/styles/imgs/in-progress-white.svg"></img>
              <span>In Progress</span>
            </div>
            <img src="../../src/styles/imgs/white-trash-can.svg" className="trash-can" onClick={() => this.props.deleteTodo(prop.id)} />
          </li>
        );
      }
  }

  sortBy() {
    var buttonClicked = !buttonClicked;

    return buttonClicked;
  }

  render() {
    let buttonClicked = false;
    let { items } = this.props.state.todos;

    return (
      <section className="todo-container">
        <ul>
          { this.showTodos() }
        </ul>
        <aside className={"categories-section" + (
          this.props.state.todos.items.length > 0 ? ' display' : ''
        )}>
          <div className="categories-container">
            <ul className="categories">
              Sort by:
              <li className={ "category" + (buttonClicked ? ' active' : '') } onClick={() => this.props.sortCompletedTodos(this.props.items)}>Completed</li>
              <li className={ "category" + (buttonClicked ? ' active' : '') }>In Progress</li>
              <li className={ "category" + (buttonClicked ? ' active' : '') }>Not Started</li>
              <li className={ "category not-started" + (buttonClicked ? ' active' : '') }>Not Started to Completed</li>
              <li className={ "category not-started" + (buttonClicked ? ' active' : '') }>Completed to Not Started</li>
            </ul>
          </div>
        </aside>
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
