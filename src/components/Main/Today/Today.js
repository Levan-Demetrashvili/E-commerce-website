import React, { useState } from 'react';
import './today.css';
import Countdown from '../../Countdown/Countdown';
import ProductsBtn from '../../ProductsBtn/ProductsBtn';
import Products from '../../Products/Products';
import { SliderBtn, SectionHeader } from '../Main';
import { API_URL, TODAY_PROD_COUNT } from '../../../config';

export default function Today() {
  const [productsInfo, setProductsInfo] = useState(null);
  const [slide, setSlide] = useState(0);

  const maxSlide = productsInfo && TODAY_PROD_COUNT - productsInfo.productsPerSlide;
  const moveX = productsInfo && -(productsInfo.wholeProductWidth * slide + (slide && productsInfo.leftOver));

  const handlePrevSlide = () => setSlide(s => (s > 0 ? s - 1 : maxSlide));
  const handleNextSlide = () => setSlide(s => (s < maxSlide ? s + 1 : 0));

  return (
    <section id="section-2" className="section__today">
      <SectionHeader name="Today's" />

      <div className="today-sales">
        <Countdown>
          <h2 className="section-title">Flash Sales</h2>
        </Countdown>

        <div className="slider-btns">
          <SliderBtn type={'prev'} onClick={handlePrevSlide} />
          <SliderBtn type={'next'} onClick={handleNextSlide} />
        </div>
      </div>
      <Products url={`${API_URL}limit=${TODAY_PROD_COUNT}`} setProductsInfo={setProductsInfo} moveX={moveX} />
      <ProductsBtn>View All Products</ProductsBtn>
    </section>
  );
}
