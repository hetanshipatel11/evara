import react from "react";
import { FiEye } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { BsShuffle } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import { TbShoppingBagPlus } from "react-icons/tb";

const Product = (product) => {
    return (
        <>
            <div class="products__container grid">
                <div class="product__item">
                    <div class="product__banner">
                        <a href="/details" class="product__images">
                            <img src={product.img1} alt="" class="product__img default" />
                            <img src={product.img2} alt="" class="product__img hover" />
                        </a>
                        <div class="product__actions">
                            <a href="#" class="action__btn" aria-label="Quick View">
                            <FiEye />
                            </a>
                            <a
                                href="#"
                                class="action__btn"
                                aria-label="Add to Wishlist"
                            >
                              <FaRegHeart />
                            </a>
                            <a href="#" class="action__btn" aria-label="Compare">
                                <BsShuffle/>
                            </a>
                        </div>
                        <div class="product__badge light-pink">{product.badge}</div>
                    </div>
                    <div class="product__content">
                        <span class="product__category">{product.ctg}</span>
                        <a href="//details">
                            <h3 class="product__title">{product.title}</h3>
                        </a>
                        <div class="product__rating">
                        <RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/>
                        </div>
                        <div class="product__price flex">
                            <span class="new__price">{product.newprice}</span>
                            <span class="old__price">{product.oldprice}</span>
                        </div>
                        <a
                            href="#"
                            class="action__btn cart__btn"
                            aria-label="Add To Cart"
                        >
                           <TbShoppingBagPlus/>
                        </a>
                    </div>
                </div>
            </div>
       
        </>);
}


export default Product;