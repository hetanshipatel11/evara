import React from "react";
import { FaStar } from "react-icons/fa";

const About = () => {
    return (
        <>
            <section className="about-us-page section">
                <div className="container">
                    <h2 className="section__title">About Us</h2>
                    <p className="about-us-description">
                        Welcome, your one-stop destination for premium-quality products and exceptional shopping experiences. Founded with a vision to make shopping convenient, enjoyable, and affordable, we bring a curated collection of items across various categories tailored to your unique tastes and needs. At [Your Store Name], customer satisfaction is our top priority. With fast shipping, secure payment options, and outstanding customer service, we aim to exceed your expectations at every step. Whether you're searching for the latest trends or timeless essentials, we’re here to help you find exactly what you need. Thank you for choosing us as your trusted online shopping partner!                    </p>
                    <h3 className="Product_Reviews">Product Reviews</h3>
                    <div className="reviews-section">
                        <div className="review-item">
                            <img src="./assets/img/avatar-1.jpg" alt="" />
                            <h4>Jane Doe</h4>
                            <p>"Amazing quality! I’m thrilled with the service and the product."</p>
                            <span className="rating"><FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                        </div>
                        <div className="review-item">
                            <img src="./assets/img/avatar-3.jpg" alt="" />
                            <h4>John Smith</h4>
                            <p>"Good value for money. Delivery was fast and hassle-free."</p>
                            <span className="rating"><FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </span>
                        </div>
                        <div className="review-item">
                            <img src="./assets/img/avatar-2.jpg" alt="" />
                            <h4>Emily Brown</h4>
                            <p>"Fantastic collection! I’ll definitely shop again."</p>
                            <span className="rating"><FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;