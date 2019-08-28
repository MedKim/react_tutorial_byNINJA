import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id:2, content: 'Play NINTENDO'}
    ]
  }
  deleteTodo = (id) =>{
    //console.log(id);
    //新しいarrayを作成する(todo.idとidが一致したらfilterでoutされる)
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    //arrayの展開と引数のtodoの追加
    let todos = [...this.state.todos, todo];
    //stateの更新
    this.setState({
      todos: todos
    })
  }
  render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
  }
}

export default App;
