import React from 'react';
import './productsBtn.css';

export default function ProductsBtn({ customStyles = {}, isTransparent = false, children }) {
  return (
    <button style={customStyles} className={'products-btn ' + (isTransparent ? 'transparent' : '')}>
      {children}
    </button>
  );
}
