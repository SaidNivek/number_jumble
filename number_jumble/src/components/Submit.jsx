import React from 'react'
import Card from 'react-bootstrap/Card'

function Submit() {
  return (
    <Card style={{border:'2px grey solid', backgroundColor:'lightblue'}} className='mt-3 col-3'>
        <Card.Body className='d-flex justify-content-center'>Submit</Card.Body>
    </Card>
  )
}

export default Submit