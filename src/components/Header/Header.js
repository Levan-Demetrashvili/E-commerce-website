import React, { useEffect, useRef } from 'react';
import './header.css';

const headerNavItems = ['Home', 'Contact', 'About', 'Sign Up'];

export default function Header() {
  return (
    <header>
      <TopHeader>
        <p className="sale-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#a" className="shop-now-link">
            ShopNow
          </a>
        </p>
        <SelectLanguage />
      </TopHeader>
      <MainHeader>
        <h1>Exclusive</h1>
        <HeaderNav />
        <div className="header__account">
          <SearchItems />
          <ActionBtns>
            <HeaderBtn name="wishlist" srcUrl="./assets/icons/Wishlist.svg" />
            <HeaderBtn name="cart" srcUrl="./assets/icons/Cart1.svg" />
          </ActionBtns>
        </div>
      </MainHeader>
      <hr />
    </header>
  );
}

function TopHeader({ children }) {
  return (
    <div className="top-header-mask">
      <div className="top-header">{children}</div>
    </div>
  );
}

function MainHeader({ children }) {
  return <div className="main-header padding-x"> {children}</div>;
}

function SelectLanguage() {
  return (
    <select name="languages" id="language-select">
      <option value="english">English</option>

      <option value="georgia">Georgian</option>
    </select>
  );
}

function HeaderNav() {
  return (
    <nav>
      <ul className="header-menu__list">
        {headerNavItems.map(item => (
          <li key={item} className={`header-menu__item ${item === 'Sign Up' ? 'header-menu__item--signup' : ''}`}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SearchItems() {
  return (
    <div className="header__search">
      <input className="header__search-input" type="search" id="search" placeholder="What are you looking for?" />
      <label className="header__search-label" htmlFor="search">
        <img src="./assets/icons/search.svg" alt="search icon" />
      </label>
    </div>
  );
}

function ActionBtns({ children }) {
  return <div className="header__account-buttons">{children}</div>;
}

function HeaderBtn({ name, srcUrl }) {
  return (
    <button id={name} className={name + '-btn'}>
      <img className={'header__' + name} src={srcUrl} alt={name + '-icon'} />
    </button>
  );
}
