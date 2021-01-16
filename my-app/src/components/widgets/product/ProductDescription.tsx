import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getProducts} from '../../../actions/getProductsAction';


interface Props {
  exampleData: string;
}

function ProductDescription() {
  const dispatch = useDispatch();
  const singleProductState = useSelector((state: RootStore) => state.singleProduct);

  const [slogan, setSlogan] = useState(singleProductState?.products?.slogan);
  const [description, setDescription] = useState(singleProductState?.products?.description);

  //might need to useRed or useCallback here incase values are not stored
  useEffect(() => {
    if (singleProductState.hasOwnProperty('products')) {
      setSlogan(singleProductState?.products?.slogan);
    }
  }, [singleProductState])

  return (
          <div className='description'>
            <h4>{slogan}</h4>
            <p>{description}</p>
          </div>
  );
}

export default ProductDescription;