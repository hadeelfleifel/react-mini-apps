import React, {Component} from 'react';
import TodoItem from './component/TodoItem'
import './App.css'

class App extends Component {

  state = {
    items: []
  }

  handleEnter = event => {
    if (event.keyCode === 13) {
      const items = this.state.items;
      const id = this.state.items.length + 1;
      const todoText = this.todoInput.value;
      this.todoInput.value ="";
      items.push({id, todoText});
      this.setState({items})
    }
  }

  handleClick = id => {
    const items = this.state.items;
    delete items[id-1];
    this.setState({items})
  }

  render() { 
    const todoComponents = this.state.items.map(item => 
    <TodoItem 
      key={item.id}
      item={item}
      handleClick={this.handleClick}
    />);

    return (
      <div className="todo-list">
        <div>To Do List</div>
        <input 
          type="text"
          ref={ text => this.todoInput = text}
          onKeyDown={this.handleEnter} 
          className="form-control mb-4"   
          placeholder="to do list"
        />

        <div className="items-list">
          {todoComponents}
        </div>
      </div>
    );
  }

}
 
export default App;
