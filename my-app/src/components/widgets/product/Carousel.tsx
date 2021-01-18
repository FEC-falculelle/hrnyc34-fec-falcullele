import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';


interface Photos {
  thumbnail_url: string,
  url: string
}

function Carousel() {
  const styleState = useSelector((state: RootStore) => state.style);
  const [featuredImage, setFeaturedImage] = useState<Photos | any>(styleState?.products?.results[0]?.photos);
  let [curIndex, setCurIndex] = useState<any>(0);
  const maxIndex = featuredImage.length - 1;

  console.log(curIndex);

  let previousSlide = () => {
    const maxIndex = featuredImage.length - 1;
    const shouldReset = curIndex === 0;
    const index = shouldReset ? maxIndex : curIndex - 1;
    setCurIndex(index);
    }

  let nextSlide = () => {
    const maxIndex = featuredImage.length - 1;
    const shouldReset = curIndex === maxIndex;
    const index = shouldReset ? 0 : curIndex + 1;
    setCurIndex(index);
    }

  return (
        <div className='carousel'>
          <Arrow direction='left' clickFunction={previousSlide} glyph="&#9664;" />
          <ImageSlide url={featuredImage[curIndex].url}/>
          <Arrow direction='right' clickFunction={nextSlide} glyph="&#9664;" />
      </div>
  );
}

export default Carousel;