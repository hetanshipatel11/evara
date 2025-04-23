import React from "react";
import Product from "../Props/Product";

const Arrivals = () => {
    return (
        <>
            <section className="new__arrivals container section">
                <h3 className="section__title"><span>New</span> Arrivals</h3>
                <div className="new__container swiper">
                    <div className="swiper-wrapper">
                        <div className="product__item swiper-slide">
                            <Product img1={"assets/img/product-1-1.jpg"} img2={"assets/img/product-1-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
                        </div>

                        <div className="product__item swiper-slide">
                            <Product img1={"assets/img/product-2-1.jpg"} img2={"assets/img/product-2-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
                        </div>
                        <div className="product__item swiper-slide">
                            <Product img1={"assets/img/product-3-1.jpg"} img2={"assets/img/product-3-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
                        </div>
                        <div className="product__item swiper-slide">
                            <Product img1={"assets/img/product-4-1.jpg"} img2={"assets/img/product-4-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
                        </div>
                        <div className="product__item swiper-slide">
                            <Product img1={"assets/img/product-5-1.jpg"} img2={"assets/img/product-5-2.jpg"} badge={"Hot"} ctg={"Clothing"} title={"Colorful Pattern Shirts"} newprice={"$238.85"} oldprice={"$245.8"} />
                        </div>
                        <div className="swiper-button-prev">
                            <i className="fi fi-rs-angle-left"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="fi fi-rs-angle-right"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Arrivals;