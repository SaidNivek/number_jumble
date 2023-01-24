import Numbers from '../components/Numbers'
import Functions from '../components/Functions'
import CurrentMath from '../components/CurrentMath'
import PreviousMath from '../components/PreviousMath'
import GameInfo from '../components/GameInfo'
import Submit from '../components/Submit'
import { Link } from 'react-router-dom'

function GameScreen() {

  return (
    <div className="row d-flex justify-content-center">
      <GameInfo />
      <Functions />
      <Numbers />
      <CurrentMath />
      <div className="d-flex flex-column justify-content-center w-25">
        <Submit />
        <hr />
        <Link to='/'><button className="btn btn-secondary  link w-100">Home</button></Link>
      </div>
      <p>When a unique correct answer is achieved, the game will play a jingle and/or animation, then add the variation to the # correct tracker, then reset.</p>
      <p>Do we want to have a maximum # correct that will display to the user when they've reached them ALL or allow them to go forever until the time runs out or they hit 'Submit'?</p>
      <p>It seems strange that the player could get all the answers and NOT be told they've got the correct answers.</p>
    </div>
  )
}

export default GameScreen