import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getStyle} from '../../../actions/productStyleAction';
import StyleComponent from './styleComponent';
import {selectStyle} from '../../../actions/selectStyleAction';


function ProductInfo() {
  const dispatch = useDispatch();
  const singleProductState = useSelector((state: RootStore) => state.singleProduct);
  const styleState = useSelector((state: RootStore) => state.style);

  const [category, setCategory] = useState(singleProductState?.products?.category);
  const [name, setName] = useState(singleProductState?.products?.name);
  const [slogan, setSlogan] = useState(singleProductState?.products?.slogan);
  const [price, setPrice] = useState(singleProductState?.products?.default_price);
  const [styles, setStyles] = useState(styleState?.products?.results)
  const [selectedStyle, setSelectedStyle] = useState(styleState?.products?.results[0])

  useEffect(() => {
    dispatch(selectStyle())
  }, []);

  //might need to useRed or useCallback here incase values are not stored
  useEffect(() => {
    if (singleProductState.hasOwnProperty('products')) {
      setCategory(singleProductState?.products?.category);
      setName(singleProductState?.products?.name);
      setSlogan(singleProductState?.products?.slogan);
      setPrice(singleProductState?.products?.default_price);
      getStyle(singleProductState?.products?.id);
    }
  }, [singleProductState]);

  useEffect(() => {
    if (styleState.hasOwnProperty('products')) {
      setStyles(styleState.products?.results);
    }
  }, [styleState])


  // const featuredProduct = useSelector((state: RootStore) => state.products[0]);

  const handleClick = (e: any) => {
    console.log(e.target.id);
  }






  return (
    <div className='product-options'>
      <p>reviews, Read all reviews</p>
      <h3>{category}</h3>
      <h1>{name}</h1>
      <h4>${price}</h4>
      <h5>Style &gt; {selectedStyle?.name}</h5>
      <div className='style-selector'>
        {styles?.map((item, i) => {
          return (
            <StyleComponent index={i} style={item} key={item.style_id} clickFunction={handleClick}/>
          );
        })}
      </div>
    </div>
  );
}

export default ProductInfo;