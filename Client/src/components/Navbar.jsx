import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="header-text">
          Workout Buddy
        </Link>
        <nav>
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>

          </div>
        </nav>
      </div>
    </header>
  );
}
