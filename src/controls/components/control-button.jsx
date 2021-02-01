import Icon, { ICONS } from './icon';

const Dot = ({ dark, size }) => (
  <div
    className="dot"
    style={{ height: `calc(${size}em / 7)`, width: `calc(${size}em / 7)` }}
  >
    <Icon dark={dark} icon={ICONS.DOT} />
  </div>
);

const ControlButton = ({ dark = false, dot, icon, onClick, size }) => (
  <button
    style={{ width: `${size}em` }}
    className="control-button"
    type="button"
    onClick={onClick}
  >
    <Icon dark={dark} icon={icon} />
    {dot && <Dot dark={dark} size={size} />}
  </button>
);

export default ControlButton;
