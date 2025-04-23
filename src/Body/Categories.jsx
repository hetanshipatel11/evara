import React from "react";
import Ctg from "../Props/Ctg";

const Categories = () => {
    return (
        <>
                <section className="categories container section">
                    <h3 className="section__title"><span>Popular</span> Categories</h3>
                    <div className="categories__container swiper">
                        <div className="swiper-wrapper">
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-1.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title">T-Shirt</h3>
                            </a>
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-2.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title"></h3>
                            </a>
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-3.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title"></h3>
                            </a>
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-4.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title"></h3>
                            </a>
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-5.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title"></h3>
                            </a>
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-6.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title"></h3>
                            </a>
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-7.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title"></h3>
                            </a>
                            <a href="/shop" className="category__item swiper-slide">
                                <img
                                    src="assets/img/category-8.jpg"
                                    alt=""
                                    className="category__img"
                                />
                                <h3 className="category__title"></h3>
                            </a>
                        </div>

                        <div className="swiper-button-prev">
                            <i className="fi fi-rs-angle-left"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="fi fi-rs-angle-right"></i>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Categories;