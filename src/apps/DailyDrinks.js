import React, { Component } from 'react'
import DrinkList from '../drinksComponent/DrinkList'
import DrinkForm from '../drinksComponent/DrinkForm'

export default class DailyDrinks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            orderEditingId: -1,
            orders: [
                {
                    id: 1,
                    name: 'milk tea',
                    price: 10,
                    note: 'How do you do?'
                },
                {
                    id: 2,
                    name: 'black tea',
                    price: 5,
                    note: 'How are you?'
                }
            ]
        }
        window.state = this.state
    }
    nextId = () => {
        this.uniqueId = this.uniqueId || this.state.orders.length + 100
        return this.uniqueId++
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
        // edit
        if (newOrder.id > 0) {
            console.log(`confirm edit`, this.state.orders.find(order => order.id === newOrder.id))
            this.setState({
                isEditing: false,
                orderEditingId: -1,
                orders: this.state.orders.map(order => order.id === newOrder.id ? {...order, ...newOrder, price: parseInt(newOrder.price) } : order)
            })
        // add
        } else {
            let addOrder = newOrder
            console.log(`confirm add`)
            addOrder.id = this.nextId()
            addOrder.price = parseInt(addOrder.price)
            this.setState({
                isEditing: false,
                orders: [
                    ...this.state.orders,
                    newOrder
                ]
            })
        }
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
