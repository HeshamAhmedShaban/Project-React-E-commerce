
import React from 'react'
import './RelatedProducts.css'
import dataProduct from '../Assets/data'
import Items from '../Items/Items'
const RelatedProducts = () => {
    return (
        <div className='relatedProducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedProducts-item">
                {dataProduct.map((item,id) => {
                    return <Items key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
