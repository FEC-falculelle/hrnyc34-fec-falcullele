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

  let [availibleSizes, setSizes] = useState<string[]>([]);

  let [quantity, setQuantity] = useState<number | string>('-');

  let [sizeValue, setSizeValue] = useState<string>('SELECT SIZE');

  useEffect(() => {
    let array: string[] = [];
    for (let i in skus) {
      if (skus[i].quantity !== 0 && array.indexOf(skus[i].size) === -1) {
        array.push(skus[i].size);
      }
    }
    setSizes(array);
  }, []);

  let handleSizeSelect = (e: any) => {
    let selectedSize = e.target.value;
    setSizeValue(e.target.value);
    for (let i in skus) {
      if (skus[i].size === selectedSize) {
        if (skus[i].quantity >= 15) {
          setQuantity(15)
        } else if (skus[i].quantity === 0) {
          setQuantity('OUT OF STOCK')
        } else {
          setQuantity(skus[i].quantity)
        }
      }
    }
  }

  let handleQuantitySelect = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  let handleStarClick = (e: any) => {
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
            <select value={sizeValue} onChange={handleSizeSelect}>
            {availibleSizes.map((item, i) => {
              return (<option key={i} value={item}>{item}</option>)
            })}
            </select>
            <select value={quantity} onChange={handleQuantitySelect}>
              <option value={quantity}>{quantity}</option> : <option value='1'>1</option>
            </select>
            <br />
            <button>ADD TO BAG</button>
            {star === false ?
              <button value={`&#9734`} onClick={handleStarClick}>&#9734;</button> :
              <button value={`&#9733`} onClick={handleStarClick}>&#9733;</button>
            }
          </form>
      </div>
  );
}

export default Form;