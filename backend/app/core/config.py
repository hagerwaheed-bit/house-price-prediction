from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "House Price Prediction API"
    MODEL_PATH: str = "models/house_price.pkl"
    LOCATIONS_PATH: str = "models/locations.json"

    class Config:
        env_file = ".env"


settings = Settings()