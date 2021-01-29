import { Controls, Login, Player, useSpotify } from 'src';

const styles = (
  <style jsx>{`
    .app {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1em;
    }
  `}</style>
);

const Home = () => {
  const { isLoggedIn, onLogin, onLogout, spotify } = useSpotify();

  return (
    <div className="app">
      {styles}
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
