import React, { useState, useContext } from 'react'
import { ReducerContext } from '../apps/DailyDrinksHook'

export default function DrinkFormHook(props) {
    const [name, setName] = useState(props.name || '')
    const [price, setPrice] = useState(props.price || '')
    const [note, setNote] = useState(props.note || '')
    const [state, dispatch] = useContext(ReducerContext)

    function handlePriceChange(e) {
        let price = 0
        if (e.target.value >= 0) {
            price = e.target.value 
        }
        setPrice(price)
    }
    function clear(event) {
        setName('')
        setPrice('')
        setNote('')

        event.preventDefault()
        event.stopPropagation()
    }
    function cancel(event) {

        dispatch({ type: 'EDIT_OFF' })

        event.preventDefault()
        event.stopPropagation()
    }
    function handleSubmit(event) {
        console.log('confirm')

        if (state.orderEditingId === -1) {
            dispatch({ 
                type: 'ADD', 
                payload: { name, price, note }
            })
        } else {
            dispatch({
                type: 'EDIT',
                payload: { name, price, note }
            })
        }

        event.preventDefault()
        event.stopPropagation()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className="required">
                Name:
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="required">
                Price:
                <input type="number" required value={price} onChange={handlePriceChange} />
            </label>
            <label>
                Notes:
                <textarea value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
            <button onClick={clear}>clear</button>
            <button onClick={cancel}>cancel</button>
            <input type="submit" value="confirm" />
        </form>
    )
}
// function useFormTextInput(initialValue) {
//     const [value, setValue] = useState(initialValue)

//     function handleChange(e) {
//         setValue(e.target.value)
//     }

//     return {
//         value,
//         onChange: handleChange,
//         setValue
//     }
// }