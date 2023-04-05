import { Link } from "react-router-dom";
import {useLogout} from '../hooks/useLogout'
export default function Navbar() {
  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/" className="header-text">
          Workout Buddy
        </Link>
        <nav>
          <div className="">
            <button onClick={handleClick}>Logout</button>
          </div>
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>

          </div>
        </nav>
      </div>
    </header>
  );
}
