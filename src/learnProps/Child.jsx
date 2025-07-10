import React, { useState } from 'react'

const Child = ({goutam,deepika}) => {
  var [count, setCount] = useState(1);
  const [course, setCourse] = useState("Web Designer");

  function updateName(){
    setCount("Sanya");
  }
  
  function updateCourse(){
    setCourse("Full Stack")
  }
  return (
    <>
      {/* <h1 onClick={updateName}>Child component </h1>
      {deepika}

    <h1>{count}</h1> */}
    <h2>{goutam}</h2>
      {/* useState , useEffect, useContext,  */}

      {/* <h2 onClick={updateCourse}>change course</h2>
      <h2>{course}</h2> */}
      <h1>{deepika}</h1>
    </>
  )
}

export default Child