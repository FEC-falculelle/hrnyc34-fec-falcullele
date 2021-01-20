import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../../store/store';


var CharacteristicsBars = () => {
  // const dispatch = useDispatch();

  const characteristicsState = useSelector((state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.characteristics);

  const [characteristics, setCharacteristics] = useState(() => characteristicsState);
 
  console.log(characteristics )

  if (characteristics) {
    var characteristicsArray: any = Object.entries(characteristics).sort((a:any, b:any) => {
      return a[0] - b[0];
    });

    var renderChars = characteristicsArray.map((char: any) => {
      return (<div>
        {char[0]}
        <div className={char[0]}>
          <div className={`${char[0]}greenBar`}> </div>
        </div>
      </div>)
    })

  }

  return (
    <div className='characteristicsBars'>
      {renderChars}
    </div>

  );
}

export default CharacteristicsBars;