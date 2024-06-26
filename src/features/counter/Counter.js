import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'


function Counter() {
    const count = useSelector((state) => state.counter.count); // adding state to the component
    const dispatch = useDispatch();
  return (
    <section className='w-full bg-black'>
        <p className='text-6xl'>{count}</p>
        <div>            
            <button onClick={() => dispatch(decrement())}>-</button>
            <button className='' onClick={() => dispatch(increment())}>+</button>
        </div>
    </section>
  )
}

export default Counter