import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../store/store';
import {getProducts} from '../actions/getProductsAction';
import '../styles/App.css';

interface Props {
  exampleData: string;
}

function App() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const productState = useSelector((state: RootStore) => state.products);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)

  const handleSubmit = () => dispatch(getProducts())

  console.log('product state: ', productState);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Falculelle Gang #FEC</h1>
      </header>
      <div className='product'>
        <div className='featured-image'>
          <button onClick={handleSubmit}>Click Me and look at the console to see the results from the api</button>
        </div>
        <div className='product-options'>
            product options
        </div>
      </div>
        <div className='description'>
           description
        </div>
        <div className='related-products'>
           related-products
        </div>
        <div className='qa'>
           Q and A
        </div>
        <div className='reviews'>
           product reviews
        </div>
    </div>
  );
}

export default App;
