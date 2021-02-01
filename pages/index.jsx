import Head from 'next/head';

import { Controls, Login, Player, useSpotify } from 'src';

const Home = () => {
  const { isLoggedIn, onLogin, spotify } = useSpotify();
  return (
    <div className="app">
      <Head>
        <title>Spotify Controls</title>
      </Head>
      {isLoggedIn && <Player spotify={spotify} />}
      {isLoggedIn && <Controls spotify={spotify} />}
      {!isLoggedIn && <Login onClick={onLogin} isLoggedIn={isLoggedIn} />}
    </div>
  );
};

export default Home;
