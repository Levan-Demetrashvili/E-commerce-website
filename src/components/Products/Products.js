import React, { useEffect, useRef } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import Loader from '../Loader';
import Error from '../Error';
import { roundTo } from '../../helper';

import './Products.css';

export default function Products({ url, setProductsInfo, moveX }) {
  const { error, isLoading, products } = useFetchProducts(url);
  const containerRef = useRef(null);

  useEffect(() => {
    const productWidth = 270;
    const gap = parseInt(getComputedStyle(containerRef.current).getPropertyValue('gap'));
    const wholeProductWidth = 270 + gap;
    const leftOver = productWidth - (containerRef.current.offsetWidth % wholeProductWidth);
    setProductsInfo({
      leftOver,
      wholeProductWidth,
      productsPerSlide: Math.ceil(containerRef.current.offsetWidth / wholeProductWidth),
    });
  }, []);

  return (
    <ul style={{ transform: `translateX(${moveX}px)` }} className="products" ref={containerRef}>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {!isLoading && !error && products?.[0] && products.map(product => <Product key={product.id} product={product} />)}
    </ul>
  );
}

function Product({ product }) {
  return (
    <li className="product">
      <div className="product__img-cover">
        <img src={product.image} alt={product.title} title={product.title} />
      </div>
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">
          <span className="price-new">{product.price.toFixed(2)}$</span>
          <span className="price-old">{Math.trunc(product.price * 1.1)}$</span>
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map(num =>
            num <= roundTo(product.rating.rate, 0.5) ? (
              <Star key={num} type={'fill'} />
            ) : roundTo(product.rating.rate, 0.5) + 1 > num ? (
              <Star key={num} type={'half'} />
            ) : (
              <Star key={num} type={'empty'} />
            )
          )}

          <small className="review-count">({product.rating.count})</small>
        </div>
      </div>
    </li>
  );
}

function Star({ type }) {
  return <img src={`./assets/icons/star-${type}.svg`} alt={type + 'star'} />;
}
