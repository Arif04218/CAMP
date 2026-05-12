import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('login');
    navigate('/login');
  };

  return (
    <div className="navbar">

      <div className="container nav-content">

        <h1 className="logo">
          BukberApp
        </h1>

        <div className="nav-links">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/reservations">
            Reservations
          </Link>

          <Link to="/tables">
            Tables
          </Link>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Navbar;