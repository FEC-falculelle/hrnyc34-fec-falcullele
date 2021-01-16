import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';


function ProductInfo() {
  const dispatch = useDispatch();
  const singleProductState = useSelector((state: RootStore) => state.singleProduct);

  const [category, setCategory] = useState(singleProductState?.products?.category);
  const [name, setName] = useState(singleProductState?.products?.name);
  const [slogan, setSlogan] = useState(singleProductState?.products?.slogan);
  const [price, setPrice] = useState(singleProductState?.products?.default_price);

  //might need to useRed or useCallback here incase values are not stored
  useEffect(() => {
    if (singleProductState.hasOwnProperty('products')) {
      setCategory(singleProductState?.products?.category);
      setName(singleProductState?.products?.name);
      setSlogan(singleProductState?.products?.slogan);
      setPrice(singleProductState?.products?.default_price);
    }
  }, [singleProductState])


  // const featuredProduct = useSelector((state: RootStore) => state.products[0]);

  const handleClick = (e: any) => {
    console.log(e.target.value);
  }



  return (
    <div className='product-options'>
      <p>reviews, Read all reviews</p>
      <h3>{category}</h3>
      <h1>{name}</h1>
      <h4>{price}</h4>
      <h5>Style &gt ~seleected style~ </h5>
    </div>
  );
}

export default ProductInfo;