import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import { Result } from '../../../actions/actionTypes';



function StyleComponent({style, clickFunction, index}:Result | any) {
console.log('style: ', style);

  return (
          <div className='styleBubble' onClick={clickFunction} id={index}
          style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}}>
            {/* <p>{style.props.name}</p>
            <img src={style.props.photos[0].thumbnail_url} /> */}
          </div>
  );
}

export default StyleComponent;

