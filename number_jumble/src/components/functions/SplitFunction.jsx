import React from 'react'
import Card from 'react-bootstrap/Card'
import { TfiSplitH } from 'react-icons/tfi'

function SplitFunction() {
  return (
    <Card style={{width:'6rem', border:'2px lightgrey solid'}}>
        <Card.Body className='d-flex justify-content-center'><TfiSplitH /></Card.Body>
    </Card>
  )
}

export default SplitFunction