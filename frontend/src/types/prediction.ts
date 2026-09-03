export interface PredictionRequest {
  carpet_area_clean: number;
  floor_clean: number;
  bathroom_clean: number;
  balcony_clean: number;
  parking_clean: number;

  location_clean: string;
  society_clean: string;
  Status: string;
  Transaction: string;
  Furnishing: string;
  facing: string;
  overlooking: string;
  Ownership: string;
}

export interface PredictionResponse {
  predicted_price: number;
}