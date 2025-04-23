import react from "react";
const Header = () =>{
    return(
        <>
        <header className="header">
      <div className="header__top">
        <div className="header__container container">
          <div className="header__contact">
            <span>(+01) - 2345 - 6789</span>
            <span>Our location</span>
          </div>
          <p className="header__alert-news">
            Super Values Deals - Save more coupons
          </p>
          <a href="/login" className="header__top-action">
            Log In / Sign Up
          </a>
        </div>
      </div>

      <nav className="nav container">
        <a href="/ " className="nav__logo">
          <img
            className="nav__logo-img"
            src="assets/img/logo.svg"
            alt="website logo"
          />
        </a>
        <div className="nav__menu" id="nav-menu">
          <div className="nav__menu-top">
            <a href="/" className="nav__menu-logo">
              <img src="./assets/img/logo.svg" alt=""/>
            </a>
            <div className="nav__close" id="nav-close">
              <i className="fi fi-rs-cross-small"></i>
            </div>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="/shop" className="nav__link">Shop</a>
            </li>
            <li className="nav__item">
              <a href="/accounts" className="nav__link">My Account</a>
            </li>
            <li className="nav__item">
              <a href="/compare" className="nav__link">Compare</a>
            </li>
            <li className="nav__item">
              <a href="/login" className="nav__link">Login</a>
            </li>
            <li className="nav__item">
              <a href="/about" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="/contact" className="nav__link">Contact</a>
            </li>
          </ul>
          <div className="header__search">
            <input
              type="text"
              placeholder="Search For Items..."
              className="form__input"
            />
            <button className="search__btn">
              <img src="assets/img/search.png" alt="search icon" />
            </button>
          </div>
        </div>
        <div className="header__user-actions">
          <a href="/wishlist" className="header__action-btn" title="Wishlist">
            <img src="assets/img/icon-heart.svg" alt="" />
            <span className="count">3</span>
          </a>
          <a href="/cart" className="header__action-btn" title="Cart">
            <img src="assets/img/icon-cart.svg" alt="" />
            <span className="count">3</span>
          </a>
          <div className="header__action-btn nav__toggle" id="nav-toggle">
            <img src="./assets//img/menu-burger.svg" alt=""/>
          </div>
        </div>
      </nav>
    </header>
        </>
    )
}
export default Header;