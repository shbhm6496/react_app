import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {    
    render() { 
        return ( 
        <div>
            <button className="btn btn-primary m-2" onClick={this.props.onReset}>Reset</button>
            {this.props.counters.map(counter => 
            <Counter key={counter.id} onIncrement={this.props.onIncrement} 
            counter ={counter} onDelete ={this.props.onDelete}>
                {/* value={counter.value} id={counter.id}  */}
                {/* <h4>Counter #{counter.id}</h4> */}
            </Counter>)}
            
        </div> );
    }
}
 
export default Counters;