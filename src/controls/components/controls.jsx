import { REPEAT } from 'src';

import ControlButton from './control-button';
import { ICONS } from './icon';

const styles = (
  <style jsx>{`
    .control-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}</style>
);

const Controls = ({ spotify }) => {
  const isRepeat = spotify.repeatState !== REPEAT.OFF;
  const isRepeatOne = isRepeat && spotify.repeatState === REPEAT.ONE;

  const cycleRepeat = (repeat) => {
    switch (repeat) {
      case REPEAT.OFF:
        spotify.repeat(REPEAT.ON);
        return;
      case REPEAT.ON:
        spotify.repeat(REPEAT.ONE);
        return;
      case REPEAT.ONE:
        spotify.repeat(REPEAT.OFF);
        return;
      default:
        return;
    }
  };

  return (
    <div className="control-buttons">
      {styles}
      <ControlButton
        dark
        size={3.5}
        icon={ICONS.SHUFFLE}
        dot={spotify.shuffleState}
        onClick={() => spotify.shuffle(!spotify.shuffleState)}
      />
      <ControlButton
        dark
        size={4}
        icon={ICONS.BACK}
        onClick={spotify.previous}
      />
      <ControlButton
        dark
        size={5}
        icon={spotify.isPlaying ? ICONS.PAUSE : ICONS.PLAY}
        onClick={spotify.isPlaying ? spotify.pause : spotify.play}
      />
      <ControlButton dark size={4} icon={ICONS.NEXT} onClick={spotify.next} />
      <ControlButton
        dark
        size={3.5}
        icon={isRepeatOne ? ICONS.REPEAT_ONE : ICONS.REPEAT}
        dot={isRepeat}
        onClick={() => cycleRepeat(spotify.repeatState)}
      />
    </div>
  );
};

export default Controls;
