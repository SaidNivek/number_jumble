import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

function Numbers() {

    // Setup some dummy numbers for the game
    const [numbers, setNumbers] = useState([1,2,3,4,5])
  return (
    <div className='d-flex justify-content-evenly mt-3'>
    {numbers.map((number) => {
        return (
            <Card className='grey-box'>
                <Card.Body className='d-flex justify-content-center'>{number}</Card.Body>
            </Card>  
        )
    })}
    </div>
  )
}

export default Numbers