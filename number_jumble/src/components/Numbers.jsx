import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

function Numbers() {

    // Setup some dummy numbers for the game
    const [numbers, setNumbers] = useState([1,2,3,4,5])
  return (
    <div className='d-flex justify-content-evenly mt-3'>
    {numbers.map((number) => {
        return (
          <button className="btn btn-light d-flex justify-content-center p-3 col-2">{number}</button>
        )
    })}
    </div>
  )
}

export default Numbers