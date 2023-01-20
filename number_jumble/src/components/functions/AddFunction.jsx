import React from 'react'
import Card from 'react-bootstrap/Card'
import { FaPlus } from 'react-icons/fa'

function AddFunction() {
  return (
    <Card style={{width:'6rem', border:'2px lightgrey solid'}}>
        <Card.Body className='d-flex justify-content-center align-items-center'><FaPlus /></Card.Body>
    </Card>
  )
}

export default AddFunction