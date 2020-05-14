import { v4 as uuidv4 } from 'uuid';

const nextId = () => {
    return uuidv4()
}

const sampleOrder = [
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

let orders = sampleOrder
if (typeof(Storage) !== "undefined") {
    orders = JSON.parse(localStorage.getItem("orders"))
}

export const initialState = {
    isEditing: false,
    orderEditingId: -1,
    orders: JSON.parse(localStorage.getItem("orders")) || sampleOrder
};
export function reducer (state, action) {
    switch(action.type) {
        case 'DELETE':
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload.id)
            }
        case 'EDIT_ON':
            return {
                ...state,
                isEditing: true,
                orderEditingId: -1
            }
        case 'EDIT_OFF':
            return {
                ...state,
                isEditing: false
            }
        case 'EDIT_FILL':
            return {
                ...state,
                isEditing: true,
                orderEditingId: action.payload.id
            }
        case 'ADD':
            const newOrder = { id: nextId(), ...action.payload, price: parseInt(action.payload.price)}
            return {
                ...state,
                isEditing: false,
                orders: [
                    ...state.orders,
                    newOrder
                ]
            }
        case 'EDIT':
            return {
                 ...state,
                isEditing: false,
                orderEditingId: -1,
                orders: state.orders.map(order => order.id === state.orderEditingId ? { ...order, ...action.payload, price: parseInt(action.payload.price)} : order)
            }
        default:
            throw new Error('default error')
    }
}