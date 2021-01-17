import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import ImageSlide from './ImageSlide';


interface Photos {
  thumbnail_url: string,
  url: string
}

function Carousel() {
  const styleState = useSelector((state: RootStore) => state.style);
  const [featuredImage, setFeaturedImage] = useState<Photos | any>(styleState?.products?.results[0]?.photos[0]);

  return (
        <div className='carousel'>
          <ImageSlide />
      </div>
  );
}

export default Carousel;