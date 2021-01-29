import Icon, { ICONS } from './icon';

const Dot = ({ dark, size }) => (
  <div className="dot">
    <style jsx>{`
      .dot {
        position: absolute;
        display: block;
        bottom: 10%;
        right: 41%;
        height: calc(${size}em / 7);
        width: calc(${size}em / 7);
        z-index: 1;
      }
    `}</style>
    <Icon dark={dark} icon={ICONS.DOT} />
  </div>
);

const ControlButton = ({ dark = false, dot, icon, onClick, size = 5 }) => (
  <button type="button" onClick={onClick}>
    <style jsx>{`
      button {
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        min-height: 100%;
        justify-content: center;
        margin: 0 0.5em;
        position: relative;
        transition: transform 100ms ease-in-out;
        width: ${size}em;
      }

      button:hover {
        transform: scale(1.1);
      }

      button:focus {
        outline: 0;
        transform: scale(1.1);
      }
    `}</style>
    <Icon dark={dark} icon={icon} />
    {dot && <Dot dark={dark} size={size} />}
  </button>
);

export default ControlButton;
