import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('login', true);
    navigate('/dashboard');
  };

  return (
    <div className="login-box">

      <h1>Login Reservasi Bukber</h1>

      <div className="form-group">

        <label>Email</label>

        <input type="email" />

      </div>

      <div className="form-group">

        <label>Password</label>

        <input type="password" />

      </div>

      <button
        className="login-btn"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
};

export default Login;