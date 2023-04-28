import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from './CounterSlice';

const CounterCompo = () => {
    const dispatch =useDispatch();
const Data = useSelector((state)=>state.counter.value) 
console.log(Data);
  return (
    <div>
      Counter
      <h1>Counter Value: {Data}</h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default CounterCompo
