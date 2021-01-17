import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import { Result } from '../../../actions/actionTypes';


function StyleComponent(style:Result | any) {
console.log(style.props.photos[0].thumbnail_url);

  return (
          <div className='styleBubble'
          style={{backgroundImage: `url(${style.props.photos[0].thumbnail_url})`}}>
            {/* <p>{style.props.name}</p>
            <img src={style.props.photos[0].thumbnail_url} /> */}
          </div>
  );
}

export default StyleComponent;

