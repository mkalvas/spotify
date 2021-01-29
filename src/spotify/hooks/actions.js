const bearerToken = (token) =>
  new Headers({ Authorization: `Bearer ${token}` });

const action = async (action, method, token) => {
  await fetch(`https://api.spotify.com/v1/me/player/${action}`, {
    method,
    headers: bearerToken(token),
  });
};

export const pause = (token) => () => action('pause', 'PUT', token);
export const play = (token) => () => action('play', 'PUT', token);
export const next = (token) => () => action('next', 'POST', token);
export const previous = (token) => () => action('previous', 'POST', token);

export const seek = (token) => async (positionMs) => {
  await fetch(
    `https://api.spotify.com/v1/me/player/seek?position_ms${positionMs}`,
    {
      method: 'PUT',
      headers: bearerToken(token),
    }
  );
};

// track, context or off.
// track   will repeat the current track.
// context will repeat the current context.
// off     will turn repeat off.
export const REPEAT = {
  OFF: 'off',
  ON: 'context',
  ONE: 'track',
};

export const repeat = (token) => async (type) => {
  await fetch(`https://api.spotify.com/v1/me/player/repeat?state=${type}`, {
    method: 'PUT',
    headers: bearerToken(token),
  });
};

export const shuffle = (token) => async (type) => {
  await fetch(`https://api.spotify.com/v1/me/player/shuffle?state=${type}`, {
    method: 'PUT',
    headers: bearerToken(token),
  });
};
