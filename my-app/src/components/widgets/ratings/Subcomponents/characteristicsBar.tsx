import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../../../store/store";

const CharacteristicsBars = () => {
  // const dispatch = useDispatch();

  const characteristicsState = useSelector(
    (state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.characteristics
  );

  const [characteristics, setCharacteristics] = useState(
    () => characteristicsState
  );

  console.log(characteristics);

  if (characteristics) {
    const characteristicsArray: any = Object.entries(characteristics).sort(
      (a: any, b: any) => {
        return a[0] - b[0];
      }
    );

    var renderChars : any = characteristicsArray.map((char: any) => {
      const arrowDownStyle: any = {
        width: `0`,
        height: `0`,
        borderLeft: `5px solid transparent`,
        borderRight: `5px solid transparent`,
        borderTop: `10px solid black`,
        transform: `translate(0)`,
        outline: `1px solid black`,
      };
      return (
        <div key={char[0]}>
          {char[0]}
          <div className={char[0]}>
            <div className="arrow-down" style={arrowDownStyle}></div>
          </div>
          {char[1].value}
        </div>
      );
    });
  }

  return <div className="characteristicsBars">{renderChars}</div>;
};

export default CharacteristicsBars;
