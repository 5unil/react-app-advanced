import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {

    people: [

            {name:'sunil', age:25},
            {name:'rahul', age:17},
            {name:'arun', age:9}            

            ]
  }

  switchNameHandler = newName => {

    this.setState({

      people: [

            {name:newName, age:25},
            {name:'sunil', age:17},
            {name:'arun', age:9}            

            ]
    })
  }

  changeNameHandler = (event) => {

    this.setState({

      people: [

            {name:'sunil', age:25},
            {name:event.target.value, age:17},
            {name:'arun', age:9}            

            ]
    })
  }


  render = () => {


    const style = {

        backgroundColor: 'yellow',
        cursor: 'pointer',
        border: '1px solid green',
        padding: '10px'
      }


    return(


      <div className="App">
        <h1>Hi I am a react app</h1>
        <button 
          onClick={this.switchNameHandler.bind(this,'Sun')}
          style={style}>
          Switch Name
        </button>
        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age}
          click={this.switchNameHandler.bind(this,'Jins')} />
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          change={this.changeNameHandler} >
          My Hobbies: Football
        </Person>
        <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age} />
       </div>
    );
  }
}

export default App;
