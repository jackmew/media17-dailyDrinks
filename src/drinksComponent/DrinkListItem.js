import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DrinkListItem extends Component {
    editOrderOne = () => {
        this.props.editOrder(this.props.id)
    }
    deleteOrderOne = () => {
        this.props.deleteOrder(this.props.id)
    }
    render() {
        return (
            <div style={{ border: "1px solid grey", margin: "5px"}}>
                <button onClick={this.editOrderOne}>Edit</button>
                <button onClick={this.deleteOrderOne}>Delete</button>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
                <p>{this.props.note}</p>
            </div>
        )
    }
}
DrinkListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    note: PropTypes.string,
    editOne: PropTypes.func,
    deleteOne: PropTypes.func
}