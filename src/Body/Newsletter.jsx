import React from "react";

const Newsletter = () => {
    return (
        <>
            <section className="newsletter section home__newsletter">
                <div className="newsletter__container container grid">
                    <h3 className="newsletter__title flex">
                        <img
                            src="./assets/img/icon-email.svg"
                            alt=""
                            className="newsletter__icon"
                        />
                        Sign in to Newsletter
                    </h3>
                    <p className="newsletter__description">
                        ...and receive $25 coupon for first shopping.
                    </p>
                    <form action="" className="newsletter__form">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="newsletter__input"
                        />
                        <button type="submit" className="newsletter__btn">Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Newsletter;