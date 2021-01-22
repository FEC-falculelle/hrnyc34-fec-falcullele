import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import Thumbnail from './Thumbnail';
import { Fullscreen, LinearScale } from '@material-ui/icons';
import {
  Box,
  Modal,
} from '@material-ui/core';


interface Photos {
  thumbnail_url: string,
  url: string
}

function Carousel() {
  const styleState = useSelector((state: RootStore) => state.style);
  const styleIndex = useSelector((state: any) => state.selectStyle);


  const [index, setIndex] = useState<number| any>(styleIndex.selectedStyleIndex);

  const [featuredImage, setFeaturedImage] = useState<Photos | any>(styleState?.products?.results[index]?.photos);

  const [modalImage, setModalImage] = useState<any>(null);

  useEffect( () => {
    setIndex(styleIndex.selectedStyleIndex);
    setFeaturedImage(styleState?.products?.results[styleIndex.selectedStyleIndex]?.photos)
  }, [styleIndex]);

  const [curIndex, setCurIndex] = useState<any>(0);
  const [carouselClassName, setCarouselClassName] = useState<any>('carousel');

  const maxIndex = featuredImage.length - 1;

  const previousSlide = () => {
    const maxIndex = featuredImage.length - 1;
    const shouldReset = curIndex === 0;
    const index = shouldReset ? maxIndex : curIndex - 1;
    setCurIndex(index);
    }

    const previousModalSlide = () => {
      const maxIndex = featuredImage.length - 1;
      const shouldReset = curIndex === 0;
      const index = shouldReset ? maxIndex : curIndex - 1;
      setCurIndex(index);
      setModalImage(featuredImage[index].url);
      }

  const nextSlide = () => {
    const maxIndex = featuredImage.length - 1;
    const shouldReset = curIndex === maxIndex;
    const index = shouldReset ? 0 : curIndex + 1;
    setCurIndex(index);
    }

    const nextModalSlide = () => {
      const maxIndex = featuredImage.length - 1;
      const shouldReset = curIndex === 0;
      const index = shouldReset ? maxIndex : curIndex - 1;
      setCurIndex(index);
      setModalImage(featuredImage[index].url);
      }


    // useEffect(() => {
    //   console.log('featuredImage: ', featuredImage);
    //   console.log(styleState?.products?.results[styleIndex.styleIndex]?.photos);
    //   setFeaturedImage(styleState?.products?.results[styleIndex.styleIndex]?.photos);
    // }, [styleIndex])


    const handleFullscreen = () => {
      setModalImage(featuredImage[curIndex].url);
    };

    const handleClose = () => {
      setModalImage(null);
    };

    const modalArrowLeft: any  = {
      position: 'absolute',
      width: '200px',
      height: '200px',
      color: 'red',
      backgroundColor: 'red',
      outline: '3px solid red'
    };

    const modalArrowRight: any = {
      position: 'absolute',
      width: '200px',
      height: '200px',
      color: 'red',
      backgroundColor: 'red',
      outline: '3px solid red'
    }

  return (
        <div className='carousel'>
          <Box>
            <Modal open={!!modalImage} onClose={handleClose}>
              <div className='modalDiv'>
              <Arrow direction='left' style={modalArrowLeft} clickFunction={previousModalSlide} />
              <img src={modalImage} alt='' className='modalImg' onClick={handleClose} />
              <Arrow direction='right' style={modalArrowRight} clickFunction={nextModalSlide} />
              </div>
            </Modal>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fullscreen" onClick={handleFullscreen}    viewBox="0 0 16 16">
            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
          </svg>
          </Box>
          <Arrow direction='left' clickFunction={previousSlide} />
          <ImageSlide url={featuredImage[curIndex].url}/>
          <Arrow direction='right' clickFunction={nextSlide} />
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