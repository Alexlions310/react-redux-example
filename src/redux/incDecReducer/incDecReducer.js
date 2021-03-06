import { INCREMENT } from './incDecTypes'
import { DECREMENT } from './incDecTypes'

const initialState = {
    value: 0
}

export const incDecReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return (
            {
                value: state.value + 1
            }
        )
        case DECREMENT: return (
            {
                value: state.value -1
            }
        )
        default: return state
    }
}