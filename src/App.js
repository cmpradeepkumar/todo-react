import React, {Component} from "react";
import "./style.css";

class App extends Component {
  constructor(){
    this.state={newItem:"", list:[]}
  }
  updateInput(key, value){
    this.setState({[key]:value});
  }
  addItem=()=>{
    const newItem={id: Math.random(), value: this.state.newItem.slice()};
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({list, newItem: ""});
  }
  removeItem(id){
    const list = [...this.state.list];
    const uList = list.filter(i=>i.id !== id);
    this.setState({list:uList});
  }
  render() {
    return (
      <div>
        <h1 className="app-title">To-Do App!</h1>
        <div>
        &nbsp;<input type="text" placeholder="add text" 
        value={this.state.newItem}
        onChange={e=>this.updateInput("newItem", e.target.value)}
        className="text-style"/>&nbsp;
        <button onClick={this.addItem}>+</button>
        <br/>
        <ul>
          {this.state.list.map(i=>{ return (
            <li key={i.id}>{i.value}&nbsp;<button onClick={()=>this.removeItem(i.id)}>x</button></li>
          );
          })}
        </ul>
        </div>
      </div>
    );
  }
}

export default App;