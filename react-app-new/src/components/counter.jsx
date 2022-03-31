import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return ( 
            <div>
                <span className={this.getBatchClasses()}>{this.formatCount()}</span>
                <button onClick={ () =>  this.props.onIncrement(this.props.counter)} 
                className="btn btn-primary m-2"><b>+</b></button>
                {/* <button onClick={this.formatCountValueDown} className="btn btn-secondary m-2"><b>-</b></button> */}
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger">Delete</button>
            </div>
         );
    }

    getBatchClasses= () =>{
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value == 0 ? "danger" : this.props.counter.value == 1 ? 
         "warning" : "secondary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value == 0 ? 'Zero' : value;
    }

    // formatCountValueUp = () => {
    //     this.setState( { count : this.state.count + 1});
    // }

    // formatCountValueDown = () => {
    //     if (this.state.count == 0)  return 0;        
    //     this.setState( { count : this.state.count - 1});
    // }
}
export default Counter;