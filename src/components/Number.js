import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../redux'
import { decrement } from '../redux'


const Number = (props) => {
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.increment}>  Increment  </button>
            <button onClick={props.decrement}>  Decrement  </button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return(
         {
           value: state.value
         }
     )
}

const mapDispatchToProps = (dispatch)  => {
     return (
         {
             increment : () => dispatch(increment()),
             decrement : () => dispatch(decrement())
         }
     )
}

export default connect(mapStateToProps,mapDispatchToProps)(Number)