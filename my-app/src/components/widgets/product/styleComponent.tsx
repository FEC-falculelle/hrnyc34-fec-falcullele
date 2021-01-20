import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import { Result } from '../../../actions/actionTypes';



function StyleComponent({style, clickFunction, index, curIndex}:Result | any) {

  let isSelected = curIndex === index;

  return (
      isSelected ?
      <div className='styleBubble' onClick={clickFunction} id={index}
      style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}}>
           <div className='selectedStyle'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='selectedStyleCheck' viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
      </div>
      :
      <div className='styleBubble' onClick={clickFunction} id={index}
        style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}}>
        {/* <p>{style.props.name}</p>
            <img src={style.props.photos[0].thumbnail_url} /> */}
      </div>
  );
}

export default StyleComponent;

