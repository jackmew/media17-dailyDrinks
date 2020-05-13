import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <p>Zest's Counter: {this.state.count}</p>
                <button onClick={this.decrement}>Decrement -</button>
                <button onClick={this.increment}>Increment +</button>
            </div>
        )
    }
}