import React from 'react'
import {ApiTopProduct} from '../apifolder/TopProductsApi';
import Product from './Product';
const Products = () => {
  return (
    <div className="flex flex-wrap p-5 items-center 
    justify-center">
        {
            ApiTopProduct.map((product, index) => (
                <Product item={product} key={index}/>
            ))
        }
    </div>
  )
}

export default Products