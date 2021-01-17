import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import { Result } from '../../../actions/actionTypes';


function StyleComponent(style:Result | any) {

  return (
          <div>{style.props.name}</div>
  );
}

export default StyleComponent;