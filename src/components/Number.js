import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux'
import { decrement } from '../redux'


const Number = () => {
    const value = useSelector(state => state.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => {dispatch(increment())}}>  Increment  </button>
            <button onClick={() => {dispatch(decrement())}}>  Decrement  </button>
        </div>
    )
}

export default Number