import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
     };

     handleIncrement = () =>{
        // this.state.count++
        // this.setState(this.state);
        this.setState({ count : this.state.count + 1 });
     };

    render() { 
        console.log('props',this.props);
        return (
            <div>
                <span className={this.getBatchClasses()}>{this.formatCount()}</span>
                {/* <span>{892+298}</span> */}
                <button onClick={this.handleIncrement} className='btn btn-sm btn-primary m-2'>Increment</button>
            </div>
        );
    }

    renderTags = () => {
        
    }

    getBatchClasses = () =>{
        let classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "danger" : "secondary";
        return classes;
    }


    formatCount(){
        const {count} = this.state;
        return count == 0 ? 'Zero' : count;
    }
}

export default Counter;