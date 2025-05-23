import React from "react";

const Login = () => {
    return (
        <>
       
            <main class="main">
                <section class="login-register section--lg">
                    <div class="login-register__container container grid">
                        <div class="login">
                            <h3 class="section__title">Login</h3>
                            <form class="form grid">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="form__input"
                                />
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    class="form__input"
                                />
                                <div class="form__btn">
                                    <button class="btn">Login</button>
                                </div>
                            </form>
                        </div>
                        <div class="register">
                            <h3 class="section__title">Create an Account</h3>
                            <form class="form grid">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    class="form__input"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="form__input"
                                />
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    class="form__input"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    class="form__input"
                                />
                                <div class="form__btn">
                                    <button class="btn">Submit & Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
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
export default Login;