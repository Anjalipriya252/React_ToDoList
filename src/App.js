import React from "react"
import logo from './logo.svg';
import './App.css';
import Listitems from './Listitems'

class App extends React.Component{
  constructor(props){
    super(props);//base class of constructor
    this.state = {
items:[],
currentItem:{
  text:'',
  key:''
}
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }
 
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();//prevents page to refresh
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem!==""){
      const newItems = [...this.state.items,newItem];   //destructuring assignment
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
 
 
  deleteItem(key){
    const filteredItems = this.state.items.filter(item=>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }
 
 
  render(){
    return(
      <div className="App">
         <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter text here"
          value={this.state.currentItem.text} 
          onChange={this.handleInput}     />
          <button type="submit">Add</button>
        </form>
      </header>
      <Listitems items={this.state.items}
      deleteItem = {this.deleteItem}></Listitems>
      </div>
     
    );
  }
}

export default App;
