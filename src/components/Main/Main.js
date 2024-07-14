import React from 'react';
import Menu from './Menu/Menu';
import './main.css';
import Today from './Today/Today';

export default function Main() {
  return (
    <main className="padding-x">
      <Menu />
      <Today />
    </main>
  );
}

export function SectionHeader({ name }) {
  return (
    <div className="section-header">
      <div className="section__header-red-box"></div>
      <p>{name}</p>
    </div>
  );
}

export function SliderBtn({ type, onClick }) {
  const srcUrl = type.startsWith('prev') ? './assets/icons/arrows/arrow-left.svg' : './assets/icons/arrows/arrow-right.svg';
  const altText = type.startsWith('prev') ? 'left-arrow icon' : 'right-arrow icon';
  return (
    <button className="slider-btn" id={type + '-btn'} onClick={onClick}>
      <img src={srcUrl} alt={altText} />
    </button>
  );
}
