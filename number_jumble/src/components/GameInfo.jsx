import React from 'react'
import CorrectNumbers from './gameinfo/CorrectNumbers'
import Reset from './gameinfo/Reset'
import Timer from './gameinfo/Timer'

function GameInfo() {
  return (
    <div className='d-flex justify-content-evenly mt-3'>
        <CorrectNumbers />
        <Reset />
        <Timer />
    </div>
  )
}

export default GameInfo