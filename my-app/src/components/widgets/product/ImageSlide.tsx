import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

interface Photos {
  thumbnail_url: string,
  url: string
}

function ImageSlide () {

  const styleState = useSelector((state: RootStore) => state.style);
  const [featuredImage, setFeaturedImage] = useState<Photos | any>(styleState?.products?.results[0]?.photos[0]);

  console.log(featuredImage.thumbnail_url);

  const styles = {
    backgroundImage: `url(${featuredImage.thumbnail_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100px',
    height: '100px'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

export default ImageSlide;