import axios from 'axios';
import { DispatchType } from '../../store/store';
import { GET_STYLES, GET_STYLES_SUCCESS, GET_STYLES_ERROR } from './actionTypesRelated';
import { Style, RelatedProduct } from './types';

const getStyles = (id: number) => async (dispatch: DispatchType) => {

  dispatch({
    type: GET_STYLES,
  });
  try {
    const res = await axios.get<number[]>(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}/related`);

    const relatedProducts: RelatedProduct[] = [];

    for (let i = 0; i < res.data.length; i++) {
      const related_id = res.data[i];
      const name = await axios.get<{ name: string }>(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related_id}`,
      );

      const picture = await axios.get<{ results: Style[] }>(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${related_id}/styles`,
      );

      relatedProducts.push({
        id: related_id,
        name: name.data.name,
        picture: picture.data.results[0] || null,
      });
    }

    return dispatch({
      type: GET_STYLES_SUCCESS,
      payload: relatedProducts,
    });
  } catch (e) {
    return dispatch({
      type: GET_STYLES_ERROR,
    });
  }
};

export default getStyles;
