import {INCREMENT} from './incDecTypes'
import { DECREMENT } from './incDecTypes'

export const increment = () => {
    return (
        {
            type: INCREMENT
        }
    )
}

export const decrement = () => {
    return (
        {
            type: DECREMENT
        }
    )
}