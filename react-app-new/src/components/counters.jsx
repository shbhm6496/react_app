import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {  
    render() { 
        const {onReset, counters, onIncrement, onDelete} = this.props;
        return ( 
            <div>
                <button onClick={onReset} className="btn btn-dark m-2">Reset</button>
                {counters.map(counter => 
                <Counter key={counter.id} counter={counter}
                onIncrement={onIncrement}
                onDelete = {onDelete}/>)}
            </div>
            
            
            // <Counter key={counter.id} value={counter.value} id={counter.id} selected = {counter.selected}
            // onDelete = {this.handleDelete}/>)
            
         );
    }
}
 
export default Counters;