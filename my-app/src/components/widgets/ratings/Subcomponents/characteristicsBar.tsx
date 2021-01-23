import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../store/store";

const CharacteristicsBars = (): JSX.Element => {
  // const dispatch = useDispatch();

  const characteristicsState = useSelector(
    (state: RootStore) => state.reviewsMetaInfo?.reviewsMeta?.characteristics
  );

  const [characteristics, setCharacteristics] = useState(
    () => characteristicsState
  );

  useEffect(() => {
    setCharacteristics(characteristicsState);
  }, [characteristicsState]);

let renderChars;
  if (characteristics) {
    const characteristicsArray = Object.entries(characteristics).sort();

    renderChars= characteristicsArray.map((char) => {
      let arrowPosition;
      if (char[1]) {
        arrowPosition = (parseFloat(char[1].value) / 5) * 10;
      }
      let lowest = '';
      const arrowDownStyle = {
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
          <div className='charTitles'>{char[0]}</div>
          <div className={`char`}>
            <div className={`${char[0]} arrow-down`} style={arrowDownStyle}></div>
          </div>
          {lowest}
          <br/>
        </div>
      );
    });
  }

  return (<div className="characteristicsBars">{renderChars}</div>);
};

export default CharacteristicsBars;
