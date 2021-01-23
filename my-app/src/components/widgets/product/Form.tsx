import React, { useDebugValue, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isConstructorDeclaration, setSyntheticTrailingComments } from 'typescript';
import {RootStore} from '../../../store/store';

function Form() {

  const styleState = useSelector((state: RootStore) => state.style);
  const styleIndex = useSelector((state: any) => state.selectStyle);


  const [index, setIndex] = useState<number| any>(styleIndex.selectedStyleIndex);

  const [skus, setSkus] = useState<any>(styleState?.products?.results[index]?.skus);

  const [star, setStar] = useState<boolean>(false);

  const [availibleSizes, setSizes] = useState<string[]>([]);

  const [quantity, setQuantity] = useState<number | string>('-');
  const [quantityArray, setQuantityArray] = useState<number[]>([]);

  const [sizeValue, setSizeValue] = useState<string>('SELECT SIZE');

  useEffect(() => {
    const array: string[] = [];
    for (const i in skus) {
      if (skus[i].quantity !== 0 && array.indexOf(skus[i].size) === -1) {
        array.push(skus[i].size);
      }
    }
    setSizes(array);
  }, []);


  const handleSizeSelect = (e: any) => {
    const selectedSize = e.target.value;
    setSizeValue(e.target.value);
    for (const i in skus) {
      if (skus[i].size === selectedSize) {
        if (skus[i].quantity >= 15) {
          setQuantity(15)
          setQuantityArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        } else if (skus[i].quantity === 0) {
          setQuantity('OUT OF STOCK');
          setQuantityArray([]);
        } else {
          setQuantity(skus[i].quantity)
          const quanArr = [];
          for (let j = 1; j <= skus[i].quantity; j++) {
            quanArr.push(j);
          }
          setQuantityArray(quanArr);
        }
      }
    }
  }

  const handleQuantitySelect = (e: any) => {
    e.preventDefault();
  }

  const handleStarClick = (e: any) => {
    e.preventDefault();
    if(e.target.value === `&#9734`) {
      setStar(true);
    } else {
      setStar(false);
    }
  }

  return (
        <div className='form'>
          <form>
            <select value={sizeValue} onChange={handleSizeSelect} className='sizeForm'>
              <option value='SELECT SIZE'>SELECT SIZE</option>
            {availibleSizes.map((item, i) => {
              return (<option className='form-select' key={i} value={item}>{item}</option>)
            })}
            </select>
            <select value={quantityArray[0]} onChange={handleQuantitySelect} className='quantityForm'>
              {sizeValue === "SELECT SIZE" ? <option className='form-select' value='-'>-</option> :
                  quantityArray.map((item,) => {
                    return (
                      <option className='form-option' value={item}>{item}</option>
                    );
                  })
              }
            </select>
            <br />
            <button className='addToBag'>ADD TO BAG</button>
            {star === false ?
              <button value={`&#9734`} onClick={handleStarClick} className='starButton'>&#9734;</button> :
              <button value={`&#9733`} onClick={handleStarClick} className='starButton'>&#9733;</button>
            }
          </form>
      </div>
  );
}

export default Form;