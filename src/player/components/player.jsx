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
  const elapsedWidth = Math.floor((position / duration) * 100);
  const remaingWidth = Math.ceil(((duration - position) / duration) * 100);

  return (
    <div className="player">
      {image && <Image src={image} width={85} height={85} />}
      <div className={`player-text ${track ? 'playing' : ''}`}>
        <h2 className="track">{track || 'Not Playing'}</h2>
        <h3 className="artist">{artist}</h3>
        {position && (
          <div className="progress">
            <p className="time">{humanPosition}</p>
            <div className="elapsed" style={{ width: elapsedWidth }}></div>
            <div className="remaining" style={{ width: remaingWidth }}></div>
            <p className="time">{humanDuration}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
