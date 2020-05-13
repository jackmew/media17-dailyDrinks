import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DrinkListItem from './DrinkListItem'

export default class DrinkList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ border: "1px solid darkblue", margin: "5px"}}>
                <button onClick={this.props.addOrder}>Add Order</button>
                {
                    this.props.orders.map(order => {
                        console.log(order)
                        return (
                            <DrinkListItem 
                                key={order.id} 
                                id={order.id} 
                                name={order.name} 
                                price={order.price} 
                                note={order.note}
                                editOrder={this.props.editOrder}
                                deleteOrder={this.props.deleteOrder}
                            />
                        )
                    })
                    
                }
            </div>
        )
    }
}
DrinkList.propTypes = {
    orders: PropTypes.array,
    addOrder: PropTypes.func,
    editOrder: PropTypes.func,
    deleteOrder: PropTypes.func
}