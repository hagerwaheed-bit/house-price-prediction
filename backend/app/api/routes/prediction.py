from fastapi import APIRouter, Request

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse
)

from app.services.preprocessing import preprocess_input
from app.services.inference import make_prediction


router = APIRouter()


@router.get("/health")
def health_check():
    return {"status": "ok"}


@router.post("/predict", response_model=PredictionResponse)
def predict(data: PredictionRequest, request: Request):

    # Get the model loaded at application startup
    model = request.app.state.model

    # Preprocess the input
    input_df = preprocess_input(data)

    # Make prediction
    predicted_price = make_prediction(model, input_df)

    return {
        "predicted_price": predicted_price
    }