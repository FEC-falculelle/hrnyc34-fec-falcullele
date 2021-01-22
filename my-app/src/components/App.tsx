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
import { ThemeProvider, createMuiTheme, IconButton, CssBaseline } from '@material-ui/core';
import { Brightness4 as ModeIcon } from '@material-ui/icons';

import axios from 'axios';
import API_TOKEN from '../config';

axios.defaults.headers = {
  Authorization: API_TOKEN,
};

interface Props {
  exampleData: string;
}

const light = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const dark = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [theme, setTheme] = useState(true);
  const productState = useSelector((state: RootStore) => state.products);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)

  const handleSubmit = () => dispatch(getProducts())

  return (
    <ThemeProvider theme={createMuiTheme(theme ? light : dark)}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
        <h1>Logo</h1>
        <div>
          _____________
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </div>
          <IconButton onClick={() => setTheme(!theme)}>
            <ModeIcon />
          </IconButton>
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
    </ThemeProvider>
  );
}

export default App;
