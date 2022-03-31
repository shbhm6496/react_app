import React, { Component } from 'react'; 

class Counter extends Component {    
    // state={ 
    //     value : this.props.counter.value
    //     // imgUrl: "https://picsum.photos/200",
    //     // tags : []
    // };

    styles={
        fontSize: 30,
        fontWeight:"bold"

    };

    // constructor(){//approach 1 to bind event handler coontinue
    //     super();//constructor of parent class
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     //console.log('Increment',this);
    // }

    // handleIncrement2 = () => { //approach 2 to bind event handler
    //     //this.state.value++;
    //     //this.setState(this.state) //update state approach 1
    //     this.setState({value : this.state.value + 1}) // update state approach 2
    //     //console.log("INcrement Value",this);
    // }

    // renderTags(){
    //     if(this.state.tags.length == 0) return <p>There are no tags</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    // handleIncrement(){//approach 1 to bind event handler
    //     console.log('Increment Clcik',this);
    // }

    // handleDelete(){

    // }

    render() { 
        // console.log('props',this.props);
        return (
            <div>                
                {/* style = {this.styles,{fontFamily:"sans-serif"}}  to use styling in the component*/}
                {/* <br></br>{this.props.children}
                <h3>Counter-> {this.props.id}</h3> */}
                <span className={this.getBatchClasses()}> {this.formatValue()}</span>
                <button 
                onClick= {() => {this.props.onIncrement(this.props.counter)}} 
                className="btn btn-secondary btn-sm">
                    Increment
                </button>
                {/* {this.state.tags.length == 0 && "PLease add some elements"}  will print the last data type
                if condition holds true */ }
                {//this.renderTags()
                /* <ul>
                to print each element of list tags    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBatchClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value == 0) ? "warning" : "primary";
        return classes;
    }

    formatValue(){
        const { value } = this.props.counter;
        return value == 0 ? 'Zero' : value;
    }
}
 
export default Counter;
