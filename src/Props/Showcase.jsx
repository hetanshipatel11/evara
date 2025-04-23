import React from "react";

const Showcase = (showcase) => {
    return (
        <>
             <div className="showcase__item">
                <a href="/details" className="showcase__img-box">
                    <img src={showcase.image} alt="" className="showcase__img" />
                </a>
                <div className="showcase__content">
                    <a href="/details">
                        <h4 className="showcase__title">{showcase.title}</h4>
                    </a>
                    <div className="showcase__price flex">
                        <span className="new__price">{showcase.newprice}</span>
                        <span className="old__price">{showcase.oldprice}</span>
                    </div>
                </div>
            </div>
         </>
     );

 }
 export default Showcase;