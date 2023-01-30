import React from 'react'
import Card from 'react-bootstrap/Card'
import { FaMinus } from 'react-icons/fa'


function SubtractFunction() {
  return (
    <Card style={{minWidth:'3rem', border:'2px lightgrey solid'}}>
        <Card.Body className='d-flex justify-content-center align-items-center'><FaMinus /></Card.Body>
    </Card>
  )
}

export default SubtractFunction