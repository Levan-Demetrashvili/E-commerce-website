import React from 'react';
import './countdown.css';

export default function Countdown({ children }) {
  return (
    <div className="countdown">
      {children}
      <span>
        <small>Days</small>
        <p>03</p>
      </span>
      <CountdownCircles />
      <span>
        <small>Hours</small>
        <p>20</p>
      </span>
      <CountdownCircles />
      <span>
        <small>Minutes</small>
        <p>19</p>
      </span>
      <CountdownCircles />
      <span>
        <small>Seconds</small>
        <p>56</p>
      </span>
    </div>
  );
}

function CountdownCircles() {
  return (
    <div className="circles">
      <div className="countdown-circle"></div>
      <div className="countdown-circle"></div>
    </div>
  );
}
