import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';


var CharacteristicsBars = () => {
  // const dispatch = useDispatch();

  const characteristicsState = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.characteristics);

  const [characteristics, setCharacteristics] = useState(() => characteristicsState);
 
  console.log(characteristics )

  return (
    <div className='characteristicsBars'>

    </div>

  );
}

export default CharacteristicsBars;