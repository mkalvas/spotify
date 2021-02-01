import next from 'next';
import { useEffect, useRef, useState } from 'react';
import * as actions from './actions';
import useInterval from './use-interval';

const SCOPES = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-modify-playback-state',
];

const navToAuth = () => {
  if (typeof document === undefined) return;
  let url = process.env.NEXT_PUBLIC_AUTH_ENDPOINT;
  url += `?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;
  url += `&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`;
  url += `&scope=${SCOPES.join('%20')}`;
  url += '&response_type=token&show_dialog=true';
  document.location.href = url;
};

const getHash = () => {
  if (typeof document === undefined) return;
  return document?.location.hash
    .substring(1)
    .split('&')
    .reduce((acc, item) => {
      if (item) {
        const parts = item.split('=');
        acc[parts[0]] = decodeURIComponent(parts[1]);
      }
      return acc;
    }, {});
};

const curryToken = (token) => ({
  pause: actions.pause(token),
  play: actions.play(token),
  next: actions.next(token),
  previous: actions.previous(token),
  shuffle: actions.shuffle(token),
  repeat: actions.repeat(token),
  seek: actions.seek(token),
});

const parseData = (json) => ({
  image: json?.item?.album?.images?.[1]?.url,
  track: json?.item?.name,
  artist: json?.item?.artists?.[0]?.name,
  duration: json?.item?.duration_ms,
  position: json?.progress_ms,
  isPlaying: json?.is_playing,
  shuffleState: json?.shuffle_state,
  repeatState: json?.repeat_state,
});

const initData = { spotify: {}, controls: {} };

const usePlayback = (token) => {
  const [data, setData] = useState(initData);
  const ref = useRef({ callback: () => {}, token });

  useEffect(() => {
    if (!ref.current || ref.current.token !== token) {
      ref.current = {
        token,
        callback: async () => {
          if (!token) return;
          try {
            const response = await fetch(
              'https://api.spotify.com/v1/me/player',
              {
                method: 'GET',
                headers: new Headers({
                  Authorization: `Bearer ${token}`,
                }),
              }
            );

            const json = await response?.json();
            const result = json ? parseData(json) : {};
            setData({ ...result, ...curryToken(token) });
          } catch (e) {
            setData(initData);
          }
        },
      };
    }
  }, [token]);

  useInterval(() => {
    if (!token) return;
    ref.current.callback();
  }, 1000);

  return data;
};

const useSpotify = () => {
  const [token, setToken] = useState(null);
  const spotify = usePlayback(token);

  useEffect(() => {
    const _token = getHash().access_token;
    if (_token) setToken(_token);
  }, []);

  return {
    isLoggedIn: !!token,
    onLogin: navToAuth,
    onLogout: () => setToken(null),
    spotify,
  };
};

export default useSpotify;
