import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


interface Photos {
  thumbnail_url: string,
  url: string
}

function ImageSlide ({url}:any) {

  const styleState = useSelector((state: RootStore) => state.style);
  const styleIndex = useSelector((state: any) => state.selectStyle);
  const index: any = styleIndex.selectedStyleIndex;

  const [featuredImage, setFeaturedImage] = useState<Photos | any>(styleState?.products?.results[index]?.photos[0]);


  const styles = {
    backgroundColor: 'transparent',
    backgroundImage: `url(${url})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    backgroundRepeat: `no-repeat`
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}

export default ImageSlide;