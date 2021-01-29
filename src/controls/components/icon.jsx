import Image from 'next/image';

export const ICONS = {
  BACK: 'back',
  PAUSE: 'pause',
  PLAY: 'play',
  SHUFFLE: 'shuffle',
  REPEAT: 'repeat',
  REPEAT_ONE: 'repeat-one',
  NEXT: 'next',
  DOT: 'dot',
};

const Icon = ({ icon, dark = false }) => (
  <Image
    src={`/icons/${dark ? 'dark' : 'light'}/${icon}.png`}
    height="250"
    width="250"
  />
);

export default Icon;
