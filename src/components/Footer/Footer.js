import React from 'react';
import './footer.css';
import { v4 as uuid } from 'uuid';
import { renderToReadableStream } from 'react-dom/server';

const accountLinks = [
  { id: 'my-acc-link', href: '#', text: 'My Account' },
  { id: 'sign-in-link', href: '#', text: 'Login / Register' },
  { id: 'cart-link', href: '#', text: 'Cart' },
  { id: 'wishlist-link', href: '#', text: 'Wishlist' },
  { id: 'shop-link', href: '#', text: 'Shop' },
];
const quickLinks = [
  { href: '#', text: 'My Account' },
  { href: '#', text: 'Login / Register' },
  { href: '#', text: 'Cart' },
  { href: '#', text: 'Wishlist' },
  { href: '#', text: 'Shop' },
];

const socialIcons = [
  { className: 'footer-facebook', src: './assets/icons/socials/Icon-Facebook.svg', alt: 'facebook icon' },
  { className: 'footer-twitter', src: './assets/icons/socials/twitter.svg', alt: 'twitter icon' },
  { className: 'footer-instagram', src: './assets/icons/socials/instagram.svg', alt: 'instagram icon' },
  { className: 'footer-linkedin', src: './assets/icons/socials/linkedin.svg', alt: 'linkedin icon' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer__rows">
        <div className="footer__row footer__row-sub">
          <h1>Exclusive</h1>
          <h4 className="footer__row-title">Subscribe</h4>
          <p className="footer__row-text">Get 10% off your first order</p>
          <form method="post" id="footer__form">
            <label htmlFor="footer__form-email">
              <input type="email" id="footer__form-email" placeholder="Enter your email" />
              <img className="footer_form-icon" src="./assets/icons/send.svg" alt="send-icon" />
            </label>
          </form>
        </div>
        <div className="footer__row footer__row-support">
          <h4 className="footer__row-title">Support</h4>
          <p className="footer__row-text">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <a id="email-link" href="mailto:exclusive@gmail.com" className="footer__row-link">
            exclusive@gmail.com
          </a>
          <p className="footer__row-text">+88015-88888-9999</p>
        </div>
        <div className="footer__row footer__row-account">
          <h4 className="footer__row-title">Account</h4>
          <FooterLinks links={accountLinks} />
        </div>
        <div className="footer__row footer__row-links">
          <h4 className="footer__row-title">Quick Link</h4>
          <FooterLinks links={quickLinks} />
        </div>
        <div className="footer__row footer__row-download">
          <h4 className="footer__row-title">Download App</h4>
          <small>Save $3 with App New User Only</small>
          <div className="row__download-container">
            <img className="footer__row-qrcode" src="./assets/img/Qrcode 1.png" alt="qr-code" />
            <div className="download__wrapper">
              <img className="footer__download-play-store" src="./assets/img/Google_Play_Store_badge.svg" alt="play-store" />
              <img className="footer__download-app-store" src="./assets/img/app-store-logo.svg" alt="app-store" />
            </div>
          </div>
          <div className="footer__row-socials">
            {socialIcons.map(social => (
              <img key={uuid()} className={social.className} src={social.src} alt={social.alt} />
            ))}
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}

function Copyright() {
  return (
    <span className="footer__copyright">
      <img src="./assets/icons/copyright.svg" alt="copyright-symbol" /> Copyright 2024. All right reserved
    </span>
  );
}

function FooterLinks({ links }) {
  return (
    <>
      {links.map(link => (
        <a key={uuid()} id={link.id ? link.id : ''} href={link.href} className="footer__row-link">
          {link.text}
        </a>
      ))}
    </>
  );
}
