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