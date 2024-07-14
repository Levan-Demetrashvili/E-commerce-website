import React from 'react';
import './menu.css';

const menuItems = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

export default function Menu() {
  return (
    <section id="section-1">
      <nav className="section__1-category-menu">
        <ul>
          {menuItems.map(item => {
            const isClothes = item.includes('Fashion');
            return (
              <li key={item}>
                <a href="#">{item}</a> {isClothes && <img src="./assets/icons/DropDown.svg" alt="dropdown icon" />}
              </li>
            );
          })}
        </ul>
        <hr />
      </nav>
      <div className="ads-container">
        <div className="ads-text">
          <div className="text__iphone">
            <img src="./assets/icons/Apple_gray_logo.svg" alt="apple-logo" />
            <p>iPhone 14 Series</p>
          </div>
          <h3 className="ad__voucher-text">
            Up to 10% <br />
            off Voucher
          </h3>
          <a className="ad__shop-link" href="#">
            Shop Now <img src="./assets/icons/arrows/arrow-right.svg" alt="right-arrow-icon" />
          </a>
        </div>
        <img className="ads-img" src="./assets/img/iphone-ad.svg" alt="iphone-ad-img" />
      </div>
    </section>
  );
}
