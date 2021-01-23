import { GET_STYLES, GET_STYLES_ERROR, GET_STYLES_SUCCESS } from '../../actions/relatedProducts/actionTypesRelated';

import StylesActionTypes, { RelatedProduct } from '../../actions/relatedProducts/types';

interface relatedState {
  relatedProducts: RelatedProduct[];
  loadingStyles: boolean;
  addStyleStatus: null | 'success' | 'error';
}

const initialState: relatedState = {
  loadingStyles: false,
  relatedProducts: [],
  addStyleStatus: null,
};

const relatedReducer = (state = initialState, action: StylesActionTypes): relatedState => {
  switch (action.type) {
    case GET_STYLES:
      return {
        ...state,
        loadingStyles: true,
      };
    case GET_STYLES_SUCCESS:
      return {
        ...state,
        loadingStyles: false,
        relatedProducts: action.payload,
      };
    case GET_STYLES_ERROR:
      return {
        ...state,
        loadingStyles: false,
      };
    default:
      return state;
  }
};

export default relatedReducer;
