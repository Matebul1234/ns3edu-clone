import React from 'react'
import Child from './Child'

const Parent = () => {
    const x = "Goutam from parent component";
  return (
     <>
       {/* <h1>Parent component</h1> */}
       <Child goutam={x} deepika="this is deepika" />
     </>
  )
}

export default Parent