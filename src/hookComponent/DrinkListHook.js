import React, { useContext } from 'react'
import DrinkListItemHook from './DrinkListItemHook'
import { ReducerContext } from '../apps/DailyDrinksHook'

export default function DrinkListHook() {
    const [state, dispatch] = useContext(ReducerContext)
    function addOrder() {
        dispatch({ type: 'EDIT_ON' })
    }
    return (
            <div style={{ border: "1px solid darkblue", margin: "5px"}}>
                <button onClick={addOrder}>Add Order</button>
                {
                    state.orders.map(order => {
                        return (
                            <DrinkListItemHook 
                                key={order.id} 
                                id={order.id} 
                                name={order.name} 
                                price={order.price} 
                                note={order.note}
                            />
                        )
                    })
                    
                }
            </div>
    )
}
