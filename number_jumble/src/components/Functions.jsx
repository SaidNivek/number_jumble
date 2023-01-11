import React from 'react'
import AddFunction from './functions/AddFunction'
import SubtractFunction from './functions/SubtractFunction'
import SplitFunction from './functions/SplitFunction'

function Functions() {
  return (
    <div className='d-flex justify-content-evenly mt-3'>
        <AddFunction />
        <SplitFunction />
        <SubtractFunction />
    </div>
  )
}

export default Functions