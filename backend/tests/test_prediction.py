import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parents[1]))

from fastapi.testclient import TestClient
from app.main import app
from app.services.inference import load_model

app.state.model = load_model()

client = TestClient(app)



def test_prediction_success():
    response = client.post(
        "/predict",
        json={
            "carpet_area_clean": 1200,
            "floor_clean": 5,
            "bathroom_clean": 2,
            "balcony_clean": 2,
            "parking_clean": 1,
            "location_clean": "Mumbai",
            "society_clean": "other",
            "Status": "Ready to Move",
            "Transaction": "Resale",
            "Furnishing": "Semi-Furnished",
            "facing": "East",
            "overlooking": "Garden/Park",
            "Ownership": "Freehold"
        }
    )

    assert response.status_code == 200
    assert "predicted_price" in response.json()


def test_prediction_invalid_input():
    response = client.post(
        "/predict",
        json={
            "carpet_area_clean": "invalid",
            "floor_clean": 5,
            "bathroom_clean": 2,
            "balcony_clean": 2,
            "parking_clean": 1,
            "location_clean": "Mumbai",
            "society_clean": "other",
            "Status": "Ready to Move",
            "Transaction": "Resale",
            "Furnishing": "Semi-Furnished",
            "facing": "East",
            "overlooking": "Garden/Park",
            "Ownership": "Freehold"
        }
    )

    assert response.status_code == 422