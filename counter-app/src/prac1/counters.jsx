import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    // state = { 
    //     counters : [
    //         {id:1,value:7},
    //         {id:2,value:0},
    //         {id:3,value:2},
    //         {id:4,value:0}
    //     ]
    //  };

    //  getDataReset = () => {
    //      const counters = this.state.counters.map(c => {
    //          c.value = 0;
    //          return c;
    //      });
    //      this.setState({counters});        
    //  };

    //  getDataListDeleted = (id) => {
    //      const counters = this.state.counters.filter(c => c.id != id);
    //      this.setState({counters});
         
    //  }

    //  getIncrement = (counter) => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = { ...counter };
    //     counters[index].value++;
    //     this.setState({ counters });

    //  }

    //  getDecrement = (counter) => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = { ...counter };
    //     counters[index].value--;
    //     this.setState({counters});
    //  }

    render() { 
        return ( 
            <React.Fragment>
                <button className="btn btn-info" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(counter => 
                <Counter key={counter.id} onDelete={this.props.onDelete}
                onIncremented={this.props.onIncrement} onDecremented = {this.props.onDecrement}
                counter={counter}/>)}
            </React.Fragment>
         );
    }
}
 
export default Counters;







