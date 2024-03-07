import React, { useContext } from 'react'
import './ShopCategory.css'
import dropdown from '../../Components/Assets/dropdown_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import Items from '../../Components/Items/Items'
const ShopCategory = (props) => {
    const {AllProduct} = useContext(ShopContext);
    console.log(AllProduct);
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="showcategory-sort">
                    Sort by <img src={dropdown} alt="" />
                </div>
            </div>
            <div className="showcategory-products">
                {AllProduct.map((item,i) => {
                    if(props.category === item.category){
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                    }else{
                        return null
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory
