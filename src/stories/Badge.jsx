import PropsType from 'prop-types';
import './badge.css';


export const Badge = ({ size, color, primary }) => {
  return (
    <div className='container'>
      <svg width={size} height={size} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <g fill={color} fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.5 6.5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2z"/>
              <path d="m5.5 7.5l5 3l5-3"/>
          </g>
      </svg>
      <div className='count' style={{ background : primary ? 'green' : 'red'}}>{size}</div>
    </div>
  )
};

Badge.propTypes = {
  size: PropsType.number,
  color: PropsType.string,
  primary: PropsType.bool
}

Badge.defaultProps = {
  size: 100,
  color: '#F90',
  primary: true
}