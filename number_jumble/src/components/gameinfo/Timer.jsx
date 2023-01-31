import React from 'react'
import Card from 'react-bootstrap/Card'

function Timer() {
  return (
    <div className="flex-colum">
      <h5 className="">Timer</h5>
      <Card className="m-1" style={{minWidth:'5rem', border:'2px grey solid', backgroundColor: 'pink'}}>          
          <Card.Body className='d-flex justify-content-center'>Timer</Card.Body>
      </Card>
    </div>
  )
}

export default Timer