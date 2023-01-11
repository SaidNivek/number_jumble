import React from 'react'
import Card from 'react-bootstrap/Card'

function PreviousMath() {
  return (
    <Card className='mt-3' style={{height: '20rem', border:'2px lightgrey solid'}}>
        <Card.Body className='flex-column mt-3'>
            <p>Earliest math goes here</p>
            <p>Second earliest math goes here</p>
            <p>And so on until submit is hit</p>
            <p>Then it clears and resets the numbers</p>
        </Card.Body>
    </Card>
  )
}

export default PreviousMath