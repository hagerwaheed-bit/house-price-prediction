import joblib
from pathlib import Path


# Get the backend folder path
BASE_DIR = Path(__file__).resolve().parents[2]

# Path to trained model
MODEL_PATH = BASE_DIR / "models" / "house_price.pkl"


def load_model():
    """
    Load the trained machine learning model.
    """
    model = joblib.load(MODEL_PATH)
    return model


def make_prediction(model, input_df):
    """
    Make a prediction using the trained model.
    """
    prediction = model.predict(input_df)

    return float(prediction[0])