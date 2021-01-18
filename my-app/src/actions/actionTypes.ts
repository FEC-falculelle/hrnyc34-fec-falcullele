export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_FAIL = "PRODUCTS_FAIL";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";

export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_FAIL = "PRODUCT_FAIL";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";


export interface ProductsLoading {
  type: typeof PRODUCTS_LOADING
}

export interface ProductsFail {
  type: typeof PRODUCTS_FAIL
}
export interface ProductLoading {
  type: typeof PRODUCT_LOADING
}

export interface ProductFail {
  type: typeof PRODUCT_FAIL
}

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
  "features": [
      {
          "feature": string,
          "value": string
      }
  ]
}

export interface ProductsSuccess {
  type: typeof PRODUCTS_SUCCESS,
  payload: (ProductType)[]
}

export interface ProductSuccess {
  type: typeof PRODUCT_SUCCESS,
  payload: (ProductType)[]
}

// '|' is equal to '||' in typescript
export type ProductDispatchTypes = ProductsLoading | ProductsFail | ProductsSuccess | ProductLoading | ProductFail | ProductSuccess