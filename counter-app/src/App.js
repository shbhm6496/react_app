import React, { Component } from 'react';
import Counters from './prac1/counters';
import Navbar from './prac1/navbar';
//import Counter from './practice/counter';
import './App.css';


class App extends Component {
    state = { 
        counters : [
            {id:1,value:7},
            {id:2,value:0},
            {id:3,value:2},
            {id:4,value:0}
        ]
     };
     getDataReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});        
    };

    getDataListDeleted = (id) => {
        const counters = this.state.counters.filter(c => c.id != id);
        this.setState({counters});
        
    }

    getIncrement = (counter) => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = { ...counter };
       counters[index].value++;
       this.setState({ counters });

    }

    getDecrement = (counter) => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = { ...counter };
       counters[index].value--;
       this.setState({counters});
    }

    render() { 
        return (  
            <React.Fragment>
                <Navbar totalCounter={this.state.counters.filter(c => c.value>0).length}    />
                <main className="container">
                    <Counters onReset={this.getDataReset} onIncrement={this.getIncrement} 
                    counters={this.state.counters}
                    onDelete={this.getDataListDeleted} onDecrement={this.getDecrement}/>
                </main>                
            </React.Fragment>
        );
    }
}
 
export default App;