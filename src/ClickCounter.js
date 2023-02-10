import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initial,
    }

    counterIncrement = (event) => {
        console.log(event)
        this.setState((state) => {
            return {
                count: state.count + this.props.increment
            }
        })
    }
    
    render() {
        return ( 
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.counterIncrement}>Click to start Counting</button>               
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    initial: 0,
    increment: 1,
}