import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Available Movies</h2>
      <div className="links">
        <Link to="/">All Movies</Link>
        <Link to="/create">New Movie</Link>
      </div>
    </nav>
  );
};
