import React from 'react'
import Card from 'react-bootstrap/Card'

function Reset() {
  return (
    <Card style={{width:'8rem', border:'2px grey solid', backgroundColor: 'yellow'}}>
        <Card.Body className='d-flex justify-content-center'>Reset</Card.Body>
    </Card>
  )
}

export default Reset