import { Link } from 'react-router-dom'
import RulesModal from '../components/RulesModal'

export default function Home() {
  return (
    <>
    <div>
        <div className='d-flex justify-content-evenly'>
            <Link to='/gamescreen'><button className="btn btn-primary">Start Game</button></Link>
            <RulesModal />
        </div>
    </div>
    </>
  )
}
