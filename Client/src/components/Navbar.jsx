import { Link } from "react-router-dom";
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'
export default function Navbar() {
  const {logout} = useLogout()
  const {user} = useAuthContext()

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
          {user && 
            <div className="hiddenmail">
              {user.email}
            </div>
          }
          {user && <div className="">
            <button onClick={handleClick}>Logout</button>
          </div>}
          
          {!user && <div className="Nav_comp">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>SignUp</Link>

          </div> }
          
        </nav>
      </div>
    </header>
  );
}
