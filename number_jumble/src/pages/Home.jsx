import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>
        <div>
            <Link to='/gamescreen'><button className="btn btn-primary">Start Game</button></Link>
        </div>
    </div>
    </>
  )
}
