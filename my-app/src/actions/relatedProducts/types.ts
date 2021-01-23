import { GET_STYLES, GET_STYLES_SUCCESS, GET_STYLES_ERROR } from './actionTypesRelated';

interface Photo {
  thumbnail_url: string;
  url: string;
}

export interface Style {
  style_id: number;
  name: string;
  original_price: string;
  sale_price: string | null;
  default?: boolean;
  photos: Photo[];
}

export interface RelatedProduct {
  id: number;
  picture: Style;
  name: string;
}

// GET QUESTIONS
interface getStylesSuccessAction {
  type: typeof GET_STYLES_SUCCESS;
  payload: RelatedProduct[];
}

interface getStylesAction {
  type: typeof GET_STYLES;
}

interface getStylesErrorAction {
  type: typeof GET_STYLES_ERROR;
}

type StylesActionTypes = getStylesSuccessAction | getStylesAction | getStylesErrorAction;

export default StylesActionTypes;
