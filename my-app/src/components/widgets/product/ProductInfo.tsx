import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';

interface Featured {
    "id": number
    "campus": string,
    "name": string,
    "slogan": string,
    "description": string,
    "category": string,
    "default_price": string,
    "created_at": string,
    "updated_at": string,
    "features": [
        {
            "feature": string,
            "value": string
        }
    ]
}

function ProductInfo() {
  const dispatch = useDispatch();
  const singleProductState = useSelector((state: RootStore) => state.singleProduct);
  // const featuredProduct = useSelector((state: RootStore) => state.products[0]);

  const handleClick = (e: any) => {
    console.log(e.target.value);
  }



  return (
    <div className='product-options'>
      <button value='1' onClick={handleClick}>1</button>
      <button value='2' onClick={handleClick}>2</button>
      <button value='3' onClick={handleClick}>3</button>
      {/* <h1>{singleProductState.name}</h1> */}
    </div>
  );
}

export default ProductInfo;