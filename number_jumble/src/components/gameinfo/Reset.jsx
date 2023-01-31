import React from 'react'
import Card from 'react-bootstrap/Card'

function Reset() {
  return (
    <div>
      <h5>Reset</h5>
      <Card className="m-1" style={{minWidth:'2rem', border:'2px grey solid', backgroundColor: 'yellow'}}>
          <Card.Body className='d-flex justify-content-center'>Reset</Card.Body>
      </Card>
    </div>
  )
}

export default Reset