import React from 'react'
import Card from 'react-bootstrap/Card'

function Timer() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h5 className="">Timer</h5>
      <Card className="m-1" style={{minWidth:'5rem', border:'2px grey solid', backgroundColor: 'pink'}}>          
          <Card.Body className='d-flex justify-content-center'>Timer</Card.Body>
      </Card>
    </div>
  )
}

export default Timer