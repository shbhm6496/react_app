//import NavBar from './components/navbar';
import './App.css';
//import Counters from './components/counters';
import React, { Component } from 'react';
import Counters from './prac1/counters';
import Navbar from './prac1/navbar';
//import Counters from './practice/counter';
//import Counters from './practice/counters';

class App extends Component {
//   state = { 
//     counters:[
//         {id:1,value: 4},
//         {id:2,value: 0},
//         {id:3,value: 0},
//         {id:4,value: 2},
//         {id:5,value: 0},
//     ]
//  };

//  handleReset = () =>{
//     const counters = this.state.counters.map(c => {
//         c.value = 0;
//         return c;
//     })
//     this.setState({counters});
//  };

//  handleIncrement = (counter) => {
//      const counters = [...this.state.counters];
//      const index = counters.indexOf(counter);
//      counters[index] = {...counter};
//      counters[index].value++;
//      //console.log("Counter",this.state.counters[0]);
//      this.setState({counters})
     
//  };

//  handleDelete= (counterId) =>{
//      const counters = this.state.counters.filter(c => c.id !== counterId);
//      this.setState({counters})
//  };
  render() { 
    return ( 
      <React.Fragment>
        <Navbar/>
        <Counters/>        
      </React.Fragment>
      // <React.Fragment>
      //   <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/> 
      //   <main className="container">
      //     <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
      //   </main>
      // </React.Fragment>
      
    );
  }
}
 
export default App;
