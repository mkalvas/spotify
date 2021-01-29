const styles = (
  <style jsx>{`
    button {
      background: rgb(80, 85, 88);
      border-radius: 100em;
      border: none;
      padding: 0.5em 1em;
      margin-left: 1.5em;
    }
  `}</style>
);

const Login = ({ onClick, isLoggedIn }) => (
  <button type="button" onClick={onClick}>
    {styles}
    {isLoggedIn ? 'Logout' : 'Login with Spotify'}
  </button>
);

export default Login;
