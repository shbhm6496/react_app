import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     value : this.props.counter.value
    // }

    getBadgeClasss = () => {
        let classes = "badge m-2 badge-";
        classes +=  this.props.counter.value <= 0 ? "danger" : "secondary";
        return classes;
    };

    getValueFormated = () =>{
        return this.props.counter.value <= 0 ? "Zero" : this.props.counter.value;
    }

    render() { 
        return ( <div>
            <span className={this.getBadgeClasss()}> {this.getValueFormated()} </span>
            <button onClick={() => this.props.onIncremented(this.props.counter)} className="btn btn-primary m-2">Increment</button>
            <button onClick={() => this.props.onDecremented(this.props.counter)} className="btn btn-dark m-2">Decrement</button>
            <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        </div>  );
    }
} 
export default Counter; 