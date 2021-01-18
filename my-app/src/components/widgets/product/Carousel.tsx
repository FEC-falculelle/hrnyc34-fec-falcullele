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

  let previousSlide = () => {
    setCurIndex(curIndex--);
  }

  let nextSlide = () => {
    setCurIndex(curIndex++);
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