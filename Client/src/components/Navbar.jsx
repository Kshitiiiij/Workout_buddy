import { Link } from "react-router-dom";
import {useSignup} from '../hooks/useSignup'
export default function Navbar() {
  const logout = useSignup()

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
