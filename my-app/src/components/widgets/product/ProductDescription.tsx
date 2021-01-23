import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';


function ProductDescription() {
  const dispatch = useDispatch();
  const singleProductState = useSelector((state: RootStore) => state.singleProduct);

  const [slogan, setSlogan] = useState(singleProductState?.products?.slogan);
  const [description, setDescription] = useState(singleProductState?.products?.description);
  const [features, setFeatures] = useState(singleProductState?.products?.features);

  useEffect(() => {
    if (singleProductState.hasOwnProperty('products')) {
      setSlogan(singleProductState?.products?.slogan);
      setDescription(singleProductState?.products?.description);
      setFeatures(singleProductState?.products?.features);
    }
  }, [singleProductState])

  return (
          <div className='description'>
            <div className='description-left'>
            <h4>{slogan}</h4>
            <p>{description}</p>
            </div>
            <div className='description-right'>
              {features.map((item, i) => (
                <div className='product-feature-div'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='feature-check' viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
                <p className='product-feature-text'>{item.feature}: {item.value}</p>
                </div>
              ))}
            </div>
          </div>
  );
}

export default ProductDescription;