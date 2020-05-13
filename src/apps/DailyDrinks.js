import React, { Component } from 'react'
import DrinkList from '../drinksComponent/DrinkList'
import DrinkForm from '../drinksComponent/DrinkForm'
import { v4 as uuidv4 } from 'uuid';

const nextId = () => {
    // this.uniqueId = this.uniqueId || this.state.orders.length + 100
    return uuidv4()
}
const sampleState = {
    isEditing: false,
    orderEditingId: -1,
    orders: [
        {
            id: nextId(),
            name: 'milk tea',
            price: 10,
            note: 'How do you do?'
        },
        {
            id: nextId(),
            name: 'black tea',
            price: 5,
            note: 'How are you?'
        }
    ]
}

export default class DailyDrinks extends Component {
    constructor(props) {
        super(props)

        if (typeof(Storage) !== "undefined") {
            this.state = {
                ...sampleState,
                orders: JSON.parse(localStorage.getItem("orders")) || sampleState.orders
            }
            } else {
            this.state = sampleState
        }
        // this.state = sampleState
        // window.state = this.state
    }
    addOrder = () => {
        console.log(`add order`)
        this.setState({
            isEditing: true,
        })
    }
    editOrder = (id) => {
        console.log(`edit id: ${id}`)

        this.setState({
            isEditing: true,
            orderEditingId: id
        })
    }
    confirmOrder = (newOrder) => {
        console.log(`confirmOrder`, newOrder)
        let mergeOrders = []
        // edit
        if (newOrder.id) {
            console.log(`confirm edit`, this.state.orders.find(order => order.id === newOrder.id))
            mergeOrders = this.state.orders.map(order => order.id === newOrder.id ? {...order, ...newOrder, price: parseInt(newOrder.price) } : order)
            this.setState({
                isEditing: false,
                orderEditingId: -1,
                orders: mergeOrders
            })
        // add
        } else {
            let addOrder = newOrder
            console.log(`confirm add`)
            addOrder.id = nextId()
            addOrder.price = parseInt(addOrder.price)
            mergeOrders = [
                ...this.state.orders,
                newOrder
            ]
            this.setState({
                isEditing: false,
                orderEditingId: -1,
                orders: mergeOrders
            })
        }
        this.save(mergeOrders)
    }
    cancelOrder = () => {
        this.setState({
            isEditing: false,
            orderEditingId: -1,
        })
    }
    deleteOrder = (id) => {
        console.log(`delete id: ${id}`)
        const ordersFiltered = this.state.orders.filter(order => order.id !== id)
        this.setState({
            orders: ordersFiltered
        })
        console.log('delete done', ordersFiltered)
        this.save(ordersFiltered)
    }
    save = (orders) => {
        localStorage.setItem("orders", JSON.stringify(orders))
        console.log('save', this.state)
    }
    renderForm() {
        let order = this.state.orders.find(order => order.id === this.state.orderEditingId) || {}
        console.log(`renderForm`, order)
        return (
            <DrinkForm
                id={order.id}
                name={order.name}
                price={order.price}
                note={order.note}
                confirmOrder={this.confirmOrder}
                cancelOrder={this.cancelOrder}
            />
        )
    }
    renderList() {
        return (
            <DrinkList 
                orders={this.state.orders}
                addOrder={this.addOrder}
                editOrder={this.editOrder}
                deleteOrder={this.deleteOrder}
            /> 
        )
    }
    render() {
        if (this.state.isEditing) {
            return this.renderForm()
        }
        return this.renderList()
    }
}
