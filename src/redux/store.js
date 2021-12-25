import { createStore } from 'redux'
import { incDecReducer } from './incDecReducer/incDecReducer'

const store = createStore(incDecReducer)

export default store