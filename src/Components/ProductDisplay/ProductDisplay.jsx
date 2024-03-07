import React, { useContext } from 'react'
import './ProductDisplay.css'
import startIcon from '../Assets/star_icon.png'
import starDull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props
    const {addToCart}=useContext(ShopContext)
    return (
        <div className='product-display'>
            <div className="ProductDisplay-left">
                <div className="ProductDisplay-img-left">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="ProductDisplay-img">
                    <img className='ProductDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="ProductDisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={startIcon} alt="" />
                    <img src={starDull} alt="" />
                    <p>(1.5k)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className='productdisplay-right-prices-old'>
                        ${product.old_price}
                    </div>
                    <div className='productdisplay-right-prices-new'>
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab earum iure a hic? Sunt, labore provident tempora placeat molestias culpa. Commodi, iste itaque. Error est rem facilis eos fugit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio praesentium nesciunt placeat necessitatibus, doloribus quidem nemo ipsa dolorum veniam porro!
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>Woman  ,  T-Shirt  ,  Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

            </div>
        </div>
    )
}

export default ProductDisplay
