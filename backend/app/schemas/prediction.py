from pydantic import BaseModel


class PredictionRequest(BaseModel):
    carpet_area_clean: float
    floor_clean: float
    bathroom_clean: float
    balcony_clean: float
    parking_clean: float

    location_clean: str
    society_clean: str
    Status: str
    Transaction: str
    Furnishing: str
    facing: str
    overlooking: str
    Ownership: str


class PredictionResponse(BaseModel):
    predicted_price: float