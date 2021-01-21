export const REVIEWS_LOADING = "REVIEWS_LOADING";
export const REVIEWS_FAIL = "REVIEWS_FAIL";
export const REVIEWS_SUCCESS = "REVIEWS_SUCCESS";

export const REVIEWSMETA_LOADING = "REVIEWSMETA_LOADING";
export const REVIEWSMETA_FAIL = "REVIEWSMETA_FAIL";
export const REVIEWSMETA_SUCCESS = "REVIEWSMETA_SUCCESS";


export interface ReviewsLoading {
  type: typeof REVIEWS_LOADING
}

export interface ReviewsFail {
  type: typeof REVIEWS_FAIL
}

export interface ReviewsMetaLoading {
  type: typeof REVIEWSMETA_LOADING
}

export interface ReviewsMetaFail {
  type: typeof REVIEWSMETA_FAIL
}

export interface ReviewsMetaSuccess {
  type: typeof REVIEWSMETA_SUCCESS,
  payload: ReviewsMetaDataFromAPI
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

export type ReviewDataFromAPI = {
  "product": string,
  "page": number,
  "count": number,
  "results": ReviewResults[],
}

export interface ReviewsSuccess {
  type: typeof REVIEWS_SUCCESS,
  payload: ReviewDataFromAPI[]
}

export interface ratingsForMeta {
  1?: string | number,
  2?: string | number,
  3?: string | number,
  4?: string | number,
  5?: string | number
}

export type recommendedForMeta = {
  true?: string,
  false?: string
}

export type characteristicsForMeta = {
  Fit?: characteristic,
  Length?: characteristic,
  Comfort?: characteristic,
  Quality?: characteristic,
  Size?: characteristic,
  Width?: characteristic,
}

export type characteristic = {
  "id": number,
  "value": string
}

export type ReviewsMetaDataFromAPI = {
  "product_id": string,
  "ratings": ratingsForMeta,
  "recommended": recommendedForMeta,
  "characteristics": characteristicsForMeta
}

export interface Photo {
  "id": number,
  "url": string
}

// '|' is equal to '||' in typescript
export type ReviewsDispatchTypes = ReviewsLoading | ReviewsFail | ReviewsSuccess 
export type ReviewsMetaDispatchTypes = ReviewsMetaLoading | ReviewsMetaFail | ReviewsMetaSuccess