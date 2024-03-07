
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {AllProduct} = useContext(ShopContext);
    const {productId}=useParams();
    const product = AllProduct.find((item) => item.id === Number(productId));
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <RelatedProducts/>
        </div>
    )
}

export default Product
