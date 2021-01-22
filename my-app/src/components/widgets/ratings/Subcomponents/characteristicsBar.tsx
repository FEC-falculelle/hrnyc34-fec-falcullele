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
    const characteristicsArray: any = Object.entries(characteristics).sort();

    var renderChars : any = characteristicsArray.map((char: any) => {
      
      const arrowPosition = (parseFloat(char[1].value) / 5) * 10;
      let lowest:string = '';
      const arrowDownStyle: any = {
        width: `0`,
        height: `0`,
        borderLeft: `5px solid transparent`,
        borderRight: `5px solid transparent`,
        borderTop: `10px solid black`,
        gridColumnStart: `${arrowPosition}`,
      };

      if (char[0] === "Size") {
        lowest = "A size too small";
      }
      if (char[0] === "Width") {
        lowest = "Too narrow";
      }
      if (char[0] === "Comfort") {
        lowest = "Uncomfortable";
      }
      if (char[0] === "Quality") {
        lowest = "Poor";
      }
      if (char[0] === "Length") {
        lowest = "Runs short";
      }
      if (char[0] === "Fit") {
        lowest = "Runs tight";
      }

      return (
        <div key={char[0]}>
          {char[0]}
          <div className={`char`}>
            <div className={`${char[0]} arrow-down`} style={arrowDownStyle}></div>
          </div>
          {lowest}
          <br/>
        </div>
      );
    });
  }

  return <div className="characteristicsBars">{renderChars}</div>;
};

export default CharacteristicsBars;
