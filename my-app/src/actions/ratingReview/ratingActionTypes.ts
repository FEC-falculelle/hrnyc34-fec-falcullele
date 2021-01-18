export const REVIEWS_LOADING = "REVIEWS_LOADING";
export const REVIEWS_FAIL = "REVIEWS_FAIL";
export const REVIEWS_SUCCESS = "REVIEWS_SUCCESS";

// export const PRODUCT_LOADING = "PRODUCT_LOADING";
// export const PRODUCT_FAIL = "PRODUCT_FAIL";
// export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";


export interface ReviewsLoading {
  type: typeof REVIEWS_LOADING
}

export interface ReviewsFail {
  type: typeof REVIEWS_FAIL
}
// export interface ProductLoading {
//   type: typeof PRODUCT_LOADING
// }

// export interface ProductFail {
//   type: typeof PRODUCT_FAIL
// }

export type ReviewDataFromAPI = {
  "product": string,
  "page": number,
  "count": number,
  "results": ReviewResults[],
}

export interface Photo {
  "id": number,
  "url": string
}

export interface ReviewResults {
    "review_id": number,
    "rating": number,
    "summary": string,
    "recommend": boolean,
    "response": null,
    "body": string,
    "date": Date,
    "reviewer_name": string,
    "helpfulness": number,
    "photos": Photo[]
}

export interface ReviewsSuccess {
  type: typeof REVIEWS_SUCCESS,
  payload: ReviewDataFromAPI[]
}

// export interface ProductSuccess {
//   type: typeof PRODUCT_SUCCESS,
//   payload: ReviewDataFromAPI[]
// }

// '|' is equal to '||' in typescript
export type ReviewsDispatchTypes = ReviewsLoading | ReviewsFail | ReviewsSuccess  //| ProductLoading | ProductFail | ProductSuccess