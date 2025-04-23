import react from "react";
import Product from "./Props/Product";
const Shop = () => {
  return (
    <>

      <main class="main">
        <section class="breadcrumb">
          <ul class="breadcrumb__list flex container">
            <li><a href="/" class="breadcrumb__link">Home</a></li>
            <li><span class="breadcrumb__link"></span></li>
            <li><span class="breadcrumb__link">Shop</span></li>
          </ul>
        </section>

        <section class="products container section--lg">
          <p class="total__products">We found <span>688</span> items for you!</p>
          <div class="products__container grid">
            <div class="product__item">
              <Product img1={"assets/img/product-1-1.jpg"} img2={"assets/img/product-1-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-2-1.jpg"} img2={"assets/img/product-2-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-3-1.jpg"} img2={"assets/img/product-3-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-4-1.jpg"} img2={"assets/img/product-4-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-5-1.jpg"} img2={"assets/img/product-5-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-6-1.jpg"} img2={"assets/img/product-6-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-7-1.jpg"} img2={"assets/img/product-7-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-8-1.jpg"} img2={"assets/img/product-8-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-9-1.jpg"} img2={"assets/img/product-9-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-10-1.jpg"} img2={"assets/img/product-10-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-11-1.jpg"} img2={"assets/img/product-11-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
            <div class="product__item">
              <Product img1={"assets/img/product-12-1.jpg"} img2={"assets/img/product-12-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
            </div>
          </div>
          <ul class="pagination">
            <li><a href="#" class="pagination__link active">01</a></li>
            <li><a href="#" class="pagination__link">02</a></li>
            <li><a href="#" class="pagination__link">03</a></li>
            <li><a href="#" class="pagination__link">...</a></li>
            <li><a href="#" class="pagination__link">16</a></li>
            <li><a href="#" class="pagination__link icon">
              <i class="fi-rs-angle-double-small-right"></i>
            </a></li>
          </ul>
        </section>

        <section class="newsletter section">
          <div class="newsletter__container container grid">
            <h3 class="newsletter__title flex">
              <img
                src="./assets/img/icon-email.svg"
                alt=""
                class="newsletter__icon"
              />
              Sign in to Newsletter
            </h3>
            <p class="newsletter__description">
              ...and receive $25 coupon for first shopping.
            </p>
            <form action="" class="newsletter__form">
              <input
                type="text"
                placeholder="Enter Your Email"
                class="newsletter__input"
              />
              <button type="submit" class="newsletter__btn">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
  
    </>
  )
}
export default Shop;