import Numbers from './Numbers'
import Functions from './Functions'
import CurrentMath from './CurrentMath'
import PreviousMath from './PreviousMath'
import GameInfo from './GameInfo'
import Submit from './Submit'

function GameScreen() {

  return (
    <>
      <GameInfo />
      <Functions />
      <Numbers />
      <CurrentMath />
      <Submit />
      <p>When a unique correct answer is achieved, the game will play a jingle and/or animation, then add the variation to the # correct tracker, then reset.</p>
      <p>Do we want to have a maximum # correct that will display to the user when they've reached them ALL or allow them to go forever until the time runs out or they hit 'Submit'?</p>
      <p>It seems strange that the player could get all the answers and NOT be told they've got the correct answers.</p>
    </>
  )
}

export default GameScreen