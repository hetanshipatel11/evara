import react from "react";
import ScrollToTop from "./scrolltotop";
import WhatsAppButton from "./wpbtn";
const Footer = () => {
  return (
    <>
    <ScrollToTop/>
    <WhatsAppButton/>
      <footer className="footer container">
        <div className="footer__container grid">
          <div className="footer__content">
            <a href="/home" className="footer__logo">
              <img src="./assets/img/logo.svg" alt="" className="footer__logo-img" />
            </a>
            <h4 className="footer__subtitle">Contact</h4>
            <p className="footer__description">
              <span>Address:</span> 13 Tlemcen Road, Street 32, Beb-Wahren
            </p>
            <p className="footer__description">
              <span>Phone:</span> +01 2222 365 /(+91) 01 2345 6789
            </p>
            <p className="footer__description">
              <span>Hours:</span> 10:00 - 18:00, Mon - Sat
            </p>
            <div className="footer__social">
              <h4 className="footer__subtitle">Follow Me</h4>
              <div className="footer__links flex">
                <a href="#">
                  <img
                    src="./assets/img/icon-facebook.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/img/icon-twitter.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/img/icon-instagram.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/img/icon-pinterest.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/img/icon-youtube.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Address</h3>
            <ul className="footer__links">
              <li><a href="/about" className="footer__link">About Us</a></li>
              <li><a href="#" className="footer__link">Delivery Information</a></li>
              <li><a href="#" className="footer__link">Privacy Policy</a></li>
              <li><a href="#" className="footer__link">Terms & Conditions</a></li>
              <li><a href="/contact" className="footer__link">Contact Us</a></li>
              <li><a href="#" className="footer__link">Support Center</a></li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">My Account</h3>
            <ul className="footer__links">
              <li><a href="/login" className="footer__link">Sign In</a></li>
              <li><a href="/cart" className="footer__link">View Cart</a></li>
              <li><a href="wishlist" className="footer__link">My Wishlist</a></li>
              <li><a href="#" className="footer__link">Track My Order</a></li>
              <li><a href="#" className="footer__link">Help</a></li>
              <li><a href="#" className="footer__link">Order</a></li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Secured Payed Gateways</h3>
            <img
              src="./assets/img/payment-method.png"
              alt=""
              className="payment__img"
            />
          </div>
        </div>
        <div className="footer__bottom">
          <p className="copyright">&copy; 2024 Evara. All right reserved</p>
          <span className="designer">Designer by Crypticalcoder</span>
        </div>
      </footer>
    </>
  )
}
export default Footer;