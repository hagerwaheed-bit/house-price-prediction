from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.services.inference import load_model
from app.api.routes.prediction import router as prediction_router


@asynccontextmanager
async def lifespan(app: FastAPI):

    # Load the model once when the application starts
    app.state.model = load_model()

    yield

    # Application shutdown
    app.state.model = None


app = FastAPI(
    title=settings.APP_NAME,
    lifespan=lifespan
)


# Allow the frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Add prediction routes
app.include_router(prediction_router)