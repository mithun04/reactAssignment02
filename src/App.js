import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0
  }

  addItem = () => {
    if(document.getElementById("inputItem").value) {
      const node = document.createElement("LI");
      const textNode = document.createTextNode(document.getElementById("inputItem").value);
      node.appendChild(textNode);
      document.getElementById("myList").appendChild(node);
      this.setState({count: this.state.count + 1});
      document.getElementById("inputItem").value = "";
    }
  }

  deleteItem = () => {
    const list = document.getElementById("myList");
    if (list.childNodes.length) {
      list.removeChild(list.childNodes[this.state.count - 1]);
      this.setState({count: this.state.count - 1});
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TODO List</h1>
        <label>Add TODOs to the list? </label>
        <input id="inputItem" type="text"/>
        <button onClick = {this.addItem}>Add {this.state.count}</button>
        <button onClick = {this.deleteItem}>Delete</button>
        <div>
          <ul id="myList">

          </ul>
        </div>
      </div>
    );
  }
}

export default App;
