import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "Get out of Bed, Wed sep 13 2018", done: true },
        { id: 1, text: "Brush teeth, Thu Sep 14 2018", done: true },
        { id: 2, text: "Eat breakfast, Fri Sep 15 2017", done: false }
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <h1>Todo List </h1>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
            })
            }

          </ul>
        </div>
      </div>
    );
  }
}

export default App;