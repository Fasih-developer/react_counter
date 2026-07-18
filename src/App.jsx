import React, { useState } from 'react'

const App = () => {
  const [num,Setnum] = useState(0);
  function counter(){
    Setnum(num+1);
  }
  function decounter(){
    Setnum(num-1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={counter}>Count</button>
      <button onClick={decounter}>Decresase</button>
    </div>
  )
}

export default App
