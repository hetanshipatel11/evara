import React from "react";

const Ctg = (item) => {
    return (
        <>
            <div className="categories__container swiper">
                <div className="swiper-wrapper">
                    <a href="/shop" className="category__item swiper-slide">
                    <img src={item.image} alt=""  className="category__img"/>
                        <h3 className="category__title">{item.title}</h3>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Ctg;