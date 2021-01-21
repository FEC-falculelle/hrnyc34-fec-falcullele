import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../store/store';
import {getProducts} from '../actions/getProductsAction';
import '../styles/App.css';
import '../styles/Product.css';
import '../styles/QA.css';
import '../styles/Ratings.css';
import Product from './widgets/product/Product';
import ProductReviewsComponent from './widgets/ratings/ratingReview';
import Questions from './widgets/Questions';

import axios from 'axios';
import API_TOKEN from '../config';

axios.defaults.headers = {
  Authorization: API_TOKEN,
};

interface Props {
  exampleData: string;
}

function App() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const productState = useSelector((state: RootStore) => state.products);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)

  const handleSubmit = () => dispatch(getProducts())

  return (
    <div className="App">
      <header className="App-header">
        <h1>Falculelle Gang #FEC</h1>
      </header>
      <Product />
      <div className='related-products'>
      <h2>RELATED PRODUCTS</h2>
      </div>
      <div className='qa'>
        <h2>QUESTIONS &amp; ANSWERS</h2>
        <Questions />
      </div>
      <div className='reviews'>
          product reviews
          <ProductReviewsComponent/>
      </div>
    </div>
  );
}

export default App;
