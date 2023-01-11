import React from 'react'
import Card from 'react-bootstrap/Card'

function Timer() {
  return (
    <Card style={{width:'8rem', border:'2px grey solid', backgroundColor: 'pink'}}>
        <Card.Body className='d-flex justify-content-center'>Timer</Card.Body>
    </Card>
  )
}

export default Timer