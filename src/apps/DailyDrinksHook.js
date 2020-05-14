import React, { useState, useReducer, createContext, useEffect } from 'react'
import DrinkFormHook from '../hookComponent/DrinkFormHook'
import DrinkListHook from '../hookComponent/DrinkListHook'
import { reducer, initialState } from '../hookReducer/reducer'

const ReducerContext = createContext()
export { ReducerContext }


export function DailyDrinksHook() {
    const reducerValue = useReducer(reducer, initialState)
    const [state, dispatch] = reducerValue
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(state.orders))
    }) 

    function renderForm () {
        let order = state.orders.find(order => order.id === state.orderEditingId) || {}
        return (
            <DrinkFormHook 
                id={order.id}
                name={order.name}
                price={order.price}
                note={order.note}
            />
        )
    }
    return (
        <ReducerContext.Provider value={reducerValue}>
            {
                state.isEditing
                ?
                renderForm()
                :
                <DrinkListHook />
            }
        </ReducerContext.Provider> 
    )
}