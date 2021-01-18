import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

interface Photos {
  thumbnail_url: string,
  url: string
}

function ImageSlide ({url}:any) {

  const styleState = useSelector((state: RootStore) => state.style);
  const [featuredImage, setFeaturedImage] = useState<Photos | any>(styleState?.products?.results[0]?.photos[0]);


  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '300px',
    height: '300px'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

export default ImageSlide;