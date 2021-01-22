import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import {getStyle} from '../../../actions/productStyleAction';
import StyleComponent from './styleComponent';
import Form from './Form';
import {selectStyle} from '../../../actions/selectStyleAction';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';


function ProductInfo() {
  const dispatch = useDispatch();
  const singleProductState = useSelector((state: RootStore) => state.singleProduct);
  const styleState = useSelector((state: RootStore) => state.style);

  const [category, setCategory] = useState(singleProductState?.products?.category);
  const [name, setName] = useState(singleProductState?.products?.name);
  const [slogan, setSlogan] = useState(singleProductState?.products?.slogan);
  const [price, setPrice] = useState(singleProductState?.products?.default_price);
  const [salePrice, setSalePrice] = useState(singleProductState?.products?.sale_price);
  const [styles, setStyles] = useState(styleState?.products?.results);
  const [selectedStyle, setSelectedStyle] = useState(styleState?.products?.results[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // From Albert
    const initialRatings = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.ratings);
    let totalRatings: any;
    let totalStars: any;
  const [ratings, setRatings] = useState(() => initialRatings);
  if (ratings) {
    totalRatings = Object.values(ratings).reduce((accum:any, currentVal:any):any => {
      return parseInt(accum) + parseInt(currentVal);
    });
    totalStars = Object.entries(ratings)
    .reduce((accum:any, currentVal:any) => {
      return accum + (parseInt(currentVal[0]) * parseInt(currentVal[1]));
    }, 0);
  }
  const averageRating = totalStars/totalRatings;

  const StyledRating = withStyles({
    iconFilled: {
      color: 'black',
    },
  })(Rating);
    // From Albert


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
      setSalePrice(styleState.products?.results[0]?.sale_price);
    }
  }, [styleState])


  // const featuredProduct = useSelector((state: RootStore) => state.products[0]);

  const handleClick = (e: any) => {
    const index = Number(e.target.id);
    setSelectedIndex(index);
    dispatch(selectStyle(index));
    setSelectedStyle(styleState?.products?.results[index]);
    setSalePrice(styleState.products?.results[index]?.sale_price)
  }


  return (
    <div className='product-options'>
      <div className='product-reviews-box'>
      <StyledRating
        className='product-rating-stars'
        name='productRating'
        value= {averageRating}
        precision={0.5}
        defaultValue={0}
        emptyIcon={<StarBorderIcon/>}
        readOnly/>
      <a className='product-reviews-text' href='#reviews'>Read all reviews</a>
    </div>
      <div className='product-category'>{category}</div>
      <div className='product-name'>{name}</div>
      {salePrice ?
      <div>
      <div className='old-price'>${price}</div>
      <div className='sale-price'>${salePrice}</div>
      </div>
      :
      <div className='default-price'>${price}</div>
      }
      <div className='style-flex'>
      <div className='style-style'>Style &gt; </div>
      <div className='style-name'>{selectedStyle?.name}</div>
      </div>
      <div className='style-selector'>
        {styles?.map((item, i) => {
          return (
            <StyleComponent index={i} curIndex={selectedIndex}style={item} key={item.style_id} clickFunction={handleClick}/>
          );
        })}
      </div>
      <Form />
    </div>
  );
}

export default ProductInfo;