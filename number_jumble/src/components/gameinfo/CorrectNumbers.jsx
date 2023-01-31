import React from 'react'
import Card from 'react-bootstrap/Card'

function CorrectNumbers() {
  return (
    <div>
      <h5>Correct</h5>
      <Card className="m-1" style={{minWidth:'2rem', border:'2px grey solid', backgroundColor:'lightgreen'}}>
          <Card.Body className='d-flex justify-content-center'>Correct</Card.Body>
      </Card>
    </div>
  )
}

export default CorrectNumbers