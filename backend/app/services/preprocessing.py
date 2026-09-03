import pandas as pd
import json
from pathlib import Path


# Get the backend folder path
BASE_DIR = Path(__file__).resolve().parents[2]

# Path to locations file
LOCATIONS_PATH = BASE_DIR / "models" / "locations.json"


# Load allowed locations
with open(LOCATIONS_PATH, "r") as file:
    allowed_locations = json.load(file)


def preprocess_input(data):
    
    # Convert request data to dictionary
    input_data = data.model_dump()

    # Handle unknown locations
    if input_data["location_clean"] not in allowed_locations:
        input_data["location_clean"] = "other"

    # Create a one-row DataFrame
    input_df = pd.DataFrame([input_data])

    return input_df