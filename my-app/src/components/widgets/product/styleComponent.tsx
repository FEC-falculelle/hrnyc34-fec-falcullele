import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';
import { Result } from '../../../actions/actionTypes';

interface Props {
  exampleData: string;
}

function StyleComponent(style:Result) {
  const dispatch = useDispatch();

  return (
          <div>{style.name}</div>
  );
}

export default StyleComponent;