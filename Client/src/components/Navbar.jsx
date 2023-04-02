import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="header-text">
          Workout Buddy
        </Link>
      </div>
    </header>
  );
}
