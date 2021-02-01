const Login = ({ onClick, isLoggedIn }) => (
  <button className="auth-button" type="button" onClick={onClick}>
    {isLoggedIn ? 'Logout' : 'Login with Spotify'}
  </button>
);

export default Login;
