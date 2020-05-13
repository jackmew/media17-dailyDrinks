import React, { Component } from 'react'

export default class DrinkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id || -1  ,
            name: props.name || '', // controlled input
            price: props.price || '',
            note: props.note || ''
        }
    }
    handleNameChange = (event) => {
        console.log(`handleNameChange ${event.target.value}`)
        this.setState({
            name: event.target.value
        })
    }
    handlePriceChange = (event) => {
        console.log(`handlePriceChange ${event.target.value}`)
        let price = 0
        if (event.target.value >= 0) {
            price = event.target.value 
        }
        this.setState({
            price
        })
    }
    handleNoteChange = (event) => {
        console.log(`handleNoteChange ${event.target.value}`)
        this.setState({
            note: event.target.value
        })
    }
    clear = (event) => {
        this.setState({
            name: '',
            price: '',
            note: ''
        })
        event.preventDefault()
        event.stopPropagation()
        console.log(`clear`, this.state)
    }
    cancel = (event) => {
        event.preventDefault()
        event.stopPropagation()
        console.log(`cancel`, this.state)
        this.props.cancelOrder()
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(`confirm`, this.state)
        this.props.confirmOrder(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="required">
                    Name:
                    <input type="text" required value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <label className="required">
                    Price:
                    <input type="number" required value={this.state.price} onChange={this.handlePriceChange} />
                </label>
                <label>
                    Notes:
                <textarea value={this.state.note} onChange={this.handleNoteChange} />
                </label>
                <button onClick={this.clear}>clear</button>
                <button onClick={this.cancel}>cancel</button>
                <input type="submit" value="confirm" />
            </form>
        )
    }
}
