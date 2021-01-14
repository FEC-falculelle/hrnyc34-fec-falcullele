export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_FAIL = "PRODUCTS_FAIL";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";



export interface ProductLoading {
  type: typeof PRODUCTS_LOADING
}

export interface ProductFail {
  type: typeof PRODUCTS_FAIL
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

export interface ProductSuccess {
  type: typeof PRODUCTS_SUCCESS,
  payload: ProductType | ProductType[]
}

// '|' is equal to '||' in typescript
export type ProductDispatchTypes = ProductLoading | ProductFail | ProductSuccess