import React from 'react'
import Card from 'react-bootstrap/Card'

function CorrectNumbers() {
  return (
    <Card style={{width:'8rem', border:'2px grey solid', backgroundColor:'lightgreen'}}>
        <Card.Body className='d-flex justify-content-center'># Correct</Card.Body>
    </Card>
  )
}

export default CorrectNumbers