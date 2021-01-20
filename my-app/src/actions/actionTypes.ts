export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_FAIL = "PRODUCTS_FAIL";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";

export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_FAIL = "PRODUCT_FAIL";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";

export const STYLE_LOADING = "STYLE_LOADING";
export const STYLE_FAIL = "STYLE_FAIL";
export const STYLE_SUCCESS = "STYLE_SUCCESS";
export const CURRENT_STYLE_INDEX = "CURRENT_STYLE_INDEX";



export type ProductType = {
  "id": number,
  "campus": string,
  "name": string,
  "slogan": string,
  "description": string,
  "category": string,
  "default_price": string,
  "created_at": string,
  "updated_at": string
}

export interface Featured {
  "id": number
  "campus": string,
  "name": string,
  "slogan": string,
  "description": string,
  "category": string,
  "default_price": string,
  "created_at": string,
  "updated_at": string,
  "features": object[]
}

export interface SkusObj {
  quantity: number
  size: string
}

export interface Result {
  "style_id": number,
  "name": string,
  "original_price": string,
  "sale_price"?: any,
  "default?": boolean,
  "photos": object[]
  "skus": object
}

export interface Style {
  "product_id": string
  "results": Result[]
}

export interface ProductsLoading {
  type: typeof PRODUCTS_LOADING
}

export interface ProductsFail {
  type: typeof PRODUCTS_FAIL
}

export interface ProductsSuccess {
  type: typeof PRODUCTS_SUCCESS,
  payload: (ProductType)[]
}

export interface ProductLoading {
  type: typeof PRODUCT_LOADING
}

export interface ProductFail {
  type: typeof PRODUCT_FAIL
}

export interface ProductSuccess {
  type: typeof PRODUCT_SUCCESS,
  payload: Featured
}

export interface StyleLoading {
  type: typeof STYLE_LOADING
}

export interface StyleFail {
  type: typeof STYLE_FAIL
}

export interface StyleSuccess {
  type: typeof STYLE_SUCCESS,
  payload: Style
}

export interface CurrentStyleIndex {
  type: typeof CURRENT_STYLE_INDEX,
  payload: number
}

// '|' is equal to '||' in typescript
export type ProductDispatchTypes = ProductsLoading | ProductsFail | ProductsSuccess | ProductLoading | ProductFail | ProductSuccess | StyleLoading | StyleFail | StyleSuccess | CurrentStyleIndex