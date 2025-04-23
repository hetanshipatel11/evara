import React from "react";
import Showcase from "../Props/Showcase";
const Releases =() =>{
    return(
        <>
          <section className="showcase section">
                    <div className="showcase__container container grid">
                        <div className="showcase__wrapper">
                            <h3 className="section__title">Hot Releases</h3>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-1.jpg"} title={"    Floral Print Casual Cotton Dress"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-2.jpg"} title={"   Ruffled Solid Long Sleeve Blouse"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-3.jpg"} title={"    Multi-Color Print V-neck T-shirt"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                        </div>
                        <div className="showcase__wrapper">
                            <h3 className="section__title">Deals & Outlet</h3>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-4.jpg"} title={"  Fish Print Patched T-shirt"} newprice={"$238.85"} oldprice={"$245.8"} />

                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-5.jpg"} title={"  Fintage Floral Print Dress"} newprice={"$238.85"} oldprice={"$245.8"} />

                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-6.jpg"} title={"    Multi-Color Print V-neck T-shirt"} newprice={"$238.85"} oldprice={"$245.8"} />

                            </div>
                        </div>
                        <div className="showcase__wrapper">
                            <h3 className="section__title">Top Selling</h3>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-7.jpg"} title={"Geometric Printed Long Sleeve Blouse"} newprice={"$238.85"} oldprice={"$245.8"} />

                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-8.jpg"} title={"Ruffled Solid Long Sleeve"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/showcase-img-9.jpg"} title={"Multi-Color Print V-neck"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                        </div>
                        <div className="showcase__wrapper">
                            <h3 className="section__title">Trendy</h3>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/product-12-1.jpg"} title={"Geometric Printed Long Sleeve Blouse"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/category-2.jpg"} title={"Geometric Printed Long Sleeve Blouse"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                            <div className="showcase__item">
                                <Showcase image={"./assets/img/category-8.jpg"} title={"Geometric Printed Long Sleeve Blouse"} newprice={"$238.85"} oldprice={"$245.8"} />
                            </div>
                        </div>
                    </div>

                </section>
        </>
    )
}

export default Releases;