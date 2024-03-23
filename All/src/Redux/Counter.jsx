import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import './couter.css'
export function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='container d-flex align-content-end flex-wrap'>
      <div className='count_head'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        className='btn btn-outline-primary'>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        className='btn btn-outline-danger'>
          Decrement
        </button>
      </div>
    </div>
  )
}