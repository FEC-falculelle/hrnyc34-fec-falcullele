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
    console.log('left');
    const maxIndex = featuredImage.length - 1;
    const shouldReset = curIndex === 0;
    const index = shouldReset ? maxIndex : curIndex - 1;
    setCurIndex(index);
    }

  let nextSlide = () => {
    console.log('right');
    const maxIndex = featuredImage.length - 1;
    const shouldReset = curIndex === maxIndex;
    const index = shouldReset ? 0 : curIndex + 1;
    setCurIndex(index);
    }

    let rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
  </svg>`

  let leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>`

    // useEffect(() => {
    //   console.log('featuredImage: ', featuredImage);
    //   console.log(styleState?.products?.results[styleIndex.styleIndex]?.photos);
    //   setFeaturedImage(styleState?.products?.results[styleIndex.styleIndex]?.photos);
    // }, [styleIndex])

  return (
        <div className='carousel'>
          <Arrow direction='left' clickFunction={previousSlide} glyph={leftArrow} />
          <ImageSlide url={featuredImage[curIndex].url}/>
          <Arrow direction='right' clickFunction={nextSlide} glyph="{rightArrow}" />
          <div className='thumbnails' >
            {featuredImage?.map((item:any, i:number) => (
                 <Thumbnail key={i} index={i} url={item} setCurIndex={setCurIndex} curIndex={curIndex}/>
            ))}
            <div className='chevron-down'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
      </div>
  );
}

export default Carousel;