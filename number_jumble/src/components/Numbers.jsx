import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

function Numbers() {

  // Setup some dummy numbers for the game
  const [numbers, setNumbers] = useState([1,2,3,4,5])
  // Set up state for the numbers that will be selected by the player
  const [selectedNumbers, setSelectedNumbers] = useState([])
  // Used to toggle the buttons
  const [isActive, setIsActive] = useState(false)
  // Function to change the colors of the buttons when selected by the player
  // Pass in the index, to ensure that the correct buttons are chosen
  // Will need to be able to re-click the button that is selected to deselect it and choose another one
  const selectNumber = (index) => {
    if (selectedNumbers.length < 2) {
      setSelectedNumbers([...selectedNumbers, index])
    }
    console.log(selectedNumbers)
  }

  const toggleClass = () => {
    setIsActive(!isActive)
  }

  const selectButton = () => {
    selectedNumbers.forEach(key => {
      
    });
    for(let key in selectedNumbers) {
      if(!key in selectedNumbers) return 'btn btn-primary d-flex justify-content-center p-3 col-2'
      else {return 'btn btn-light d-flex justify-content-center p-3 col-2'}
    } 
  }


  return (
    <div className='d-flex justify-content-evenly mt-3'>
    {numbers.map((number, index) => {
        return (
          <button 
            key={index}
            onClick={() => {
              selectNumber(index)
              toggleClass()
            }} 
            value={number}
            className={isActive ? 'btn btn-primary d-flex justify-content-center p-3 col-2' : 'btn btn-light d-flex justify-content-center p-3 col-2'}
          >
            {number}
          </button>
        )
    })}
    </div>
  )
}

export default Numbers