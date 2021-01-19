import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import Thumbnail from './Thumbnail';


interface Photos {
  thumbnail_url: string,
  url: string
}

function Carousel() {
  const styleState = useSelector((state: RootStore) => state.style);
  const styleIndex = useSelector((state: any) => state.selectStyle);


  const [index, setIndex] = useState<number| any>(styleIndex.selectedStyleIndex);

  const [featuredImage, setFeaturedImage] = useState<Photos | any>(styleState?.products?.results[index]?.photos);

  useEffect( () => {
    setIndex(styleIndex.selectedStyleIndex);
    setFeaturedImage(styleState?.products?.results[styleIndex.selectedStyleIndex]?.photos)
  }, [styleIndex]);

  let [curIndex, setCurIndex] = useState<any>(0);

  const maxIndex = featuredImage.length - 1;

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

    // useEffect(() => {
    //   console.log('featuredImage: ', featuredImage);
    //   console.log(styleState?.products?.results[styleIndex.styleIndex]?.photos);
    //   setFeaturedImage(styleState?.products?.results[styleIndex.styleIndex]?.photos);
    // }, [styleIndex])

  return (
        <div className='carousel'>
          <div className='thumbnails' >
          {featuredImage?.map((item:any, i:number) => {
            return (
            <Thumbnail key={i} index={i} url={item} setCurIndex={setCurIndex} />
            )
          })}
            </div>
          <Arrow direction='left' clickFunction={previousSlide} glyph="&#9664;" />
          <ImageSlide url={featuredImage[curIndex].url}/>
          <Arrow direction='right' clickFunction={nextSlide} glyph="&#9664;" />
      </div>
  );
}

export default Carousel;