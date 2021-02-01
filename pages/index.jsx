import { Controls, Login, Player, useSpotify } from 'src';

const Home = () => {
  const { isLoggedIn, onLogin, onLogout, spotify } = useSpotify();
  return (
    <div className="app">
      {isLoggedIn && <Player spotify={spotify} />}
      {isLoggedIn && <Controls spotify={spotify} />}
      <Login
        onClick={isLoggedIn ? onLogout : onLogin}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Home;
