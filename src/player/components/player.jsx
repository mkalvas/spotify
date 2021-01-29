import Image from 'next/image';

const parseMs = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const Player = ({ spotify }) => {
  const { artist, duration, image, position, track } = spotify;
  const humanPosition = parseMs(position);
  const humanDuration = parseMs(duration);

  return (
    <div className="player">
      {image && <Image src={image} width={85} height={85} />}
      <div className={`player-text ${track ? 'playing' : ''}`}>
        <h2 className="track">{track || 'Not Playing'}</h2>
        <h3>{artist}</h3>
        {position && (
          <div className="progress">
            <p className="time">{humanPosition}</p>
            <div className="elapsed"></div>
            <div className="remaining"></div>
            <p className="time">{humanDuration}</p>
          </div>
        )}
      </div>
      <style jsx>{`
        .player {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-width: 15em;
          margin-left: 1em;
        }

        .player-text {
          margin-bottom: 0.25em;
          min-width: 10em;
        }

        .player-text.playing {
          margin-left: 0.75em;
        }

        h2 {
          margin: 0 0 0.25em 0;
          font-weight: 200;
        }

        h3 {
          margin: 0;
          font-weight: 200;
        }

        .progress {
          border-radius: 10em;
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 0.25em;
          margin-top: 0.75em;
        }

        .elapsed {
          height: 0.25em;
          margin-left: 0.25em;
          background-color: rgba(255, 255, 255, 0.9);
          border-top-left-radius: 10em;
          border-bottom-left-radius: 10em;
          margin: 0;
          width: ${Math.floor((position / duration) * 100)}%;
          transition: width 100ms ease-in-out;
        }

        .remaining {
          height: 0.25em;
          margin-right: 0.25em;
          background-color: rgb(80, 85, 88);
          border-top-right-radius: 10em;
          border-bottom-right-radius: 10em;
          margin: 0;
          width: ${Math.ceil(((duration - position) / duration) * 100)}%;
          transition: width 1000ms ease-in-out;
        }

        .time {
          margin: 0 1em;
          font-weight: 100;
          font-size: 0.25em;
        }
      `}</style>
    </div>
  );
};

export default Player;
