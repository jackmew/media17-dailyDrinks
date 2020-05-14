import React, { useContext }  from 'react'
import { ReducerContext } from '../apps/DailyDrinksHook'

export default function DrinkListItemHook(props) {
    const [state, dispatch] = useContext(ReducerContext)

    function editOrderOne() {
        dispatch({ 
            type: "EDIT_FILL", 
            payload: { id: props.id } 
        })
    }
    function deleteOrderOne() {
        dispatch({ type: 'DELETE', payload: { id: props.id } })
    }
    return (
        <div style={{ border: "1px solid grey", margin: "5px"}}>
            <button onClick={editOrderOne}>Edit</button>
            <button onClick={deleteOrderOne}>Delete</button>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.note}</p>
        </div>
    )
}
