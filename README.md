
# House Price Prediction

🌐 **Live Demo:** https://house-price-prediction-vert-two.vercel.app

⚙️ **API Documentation:** https://house-price-prediction-8qt2.vercel.app/docs


🏠 House Price Prediction

An end-to-end Machine Learning web application that predicts house prices based on property features such as area,
location, floor, bathrooms, furnishing, and parking.
The project covers the complete workflow from data preprocessing and model training to API development and web deployment.

📌 Project Overview
This project is an end-to-end Machine Learning application for house price prediction.
The user enters property details such as carpet area, location, floor, bathrooms, balconies, parking, furnishing, and ownership.
The data is processed and passed to a trained Machine Learning model through a FastAPI backend. The prediction is then displayed through a React web interface.

✨ Main Features
- Data Cleaning and Preprocessing
- Exploratory Data Analysis (EDA)
- Feature Engineering
- Outlier Detection and Handling
- Multiple Machine Learning Models
- Model Evaluation and Comparison
- Random Forest Price Prediction
- FastAPI REST API
- React + TypeScript Web Interface
- Input Validation
- Automated API Testing with Pytest
- Docker Support

#️ System Architecture


```mermaid
flowchart TD
    A[House Price Dataset] --> B[Jupyter Notebook]
    B --> C[Data Cleaning]
    C --> D[Feature Engineering]
    D --> E[Model Training]
    E --> F[Random Forest Model]
    F --> G[house_price.pkl]
    G --> H[FastAPI Backend]
    H --> I[/predict API]
    I --> J[React + TypeScript Frontend]
    J --> K[Predicted House Price]
```

#️ Tech Stack
Machine Learning:
Python
Pandas
NumPy
Scikit-learn
Matplotlib
Seaborn
Joblib

Backend:
FastAPI
Pydantic
Uvicorn
Pytest

Frontend:
React
TypeScript
Vite
React Router
CSS

Tools:
Jupyter Notebook
Git
GitHub
Docker

##  Dataset
The dataset used in this project is a House Price Dataset containing information about residential properties and their features.
### Dataset Source
https://www.kaggle.com/datasets/juhibhojani/house-price

### Data Import Reference
https://www.kaggle.com/code/juhibhojani/house-price-data-import

### Download Instructions
1. Open the Kaggle dataset using the link above.
2. Click the **Download** button.
3. Extract the downloaded files.
4. Place the CSV file inside the `data/` folder in the project root.
5. Open `notebooks/house_price_model.ipynb`.
6. Run the notebook from top to bottom to reproduce the data preprocessing, model training, evaluation, and model export.

# Machine Learning
Raw Data
   ↓
Data Cleaning
   ↓
Feature Engineering
   ↓
Train/Test Split
   ↓
Preprocessing
   ↓
Model Training
   ↓
Model Evaluation
   ↓
Model Export

## 📈 Model Evaluation


Model	              MAE	       RMSE	           R²
Linear Regression	4,669,151     11,685,107	 0.478
Random Forest	    2,974,084	  9,925,824	     0.623
Gradient Boosting	3,444,507	  10,054,794	 0.613

### 🏆 Best Model

Random Forest Regressor was selected as the final model because it achieved the best overall performance on the test set.

#Project Structure

house-price-project/
│
├── notebooks/
│   └── house_price_model.ipynb
│
├── backend/
│   ├── app/
│   ├── models/
│   │   └── house_price.pkl
│   ├── tests/
│   ├── requirements.txt
│   ├── .env.example
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
## Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend: http://localhost:8000  
Swagger Docs: http://localhost:8000/docs

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## Environment Variables

### Backend

Create a `.env` file inside the `backend/` directory based on `.env.example`.

| Variable | Description | Example |
|---|---|---|
| `APP_NAME` | Application name | `House Price Prediction API` |
| `MODEL_PATH` | Path to the trained model | `models/house_price.pkl` |
| `LOCATIONS_PATH` | Path to the locations file | `models/locations.json` |

### Frontend

Create a `.env` file inside the `frontend/` directory based on `.env.example`.

| Variable | Description | Example |
|---|---|---|
| `VITE_API_BASE_URL` | FastAPI backend URL | `http://localhost:8000` |

## 🔌 API Reference

The FastAPI backend provides two main endpoints for checking the API status and predicting house prices.

### 1. Health Check

**Endpoint:**  
`GET /health`

This endpoint is used to check if the API is running correctly.

**Example:**

```bash
curl http://localhost:8000/health
```

**Response:**

```json
{
  "status": "ok"
}
```

### 2. House Price Prediction

**Endpoint:**  
`POST /predict`

This endpoint receives the house features and returns the predicted house price.

**Example:**

```bash
curl -X POST "http://localhost:8000/predict" ^
  -H "Content-Type: application/json" ^
  -d "{\"carpet_area_clean\":1200,\"floor_clean\":5,\"bathroom_clean\":2,\"balcony_clean\":2,\"parking_clean\":1,\"location_clean\":\"Mumbai\",\"society_clean\":\"other\",\"Status\":\"Ready to Move\",\"Transaction\":\"Resale\",\"Furnishing\":\"Semi-Furnished\",\"facing\":\"East\",\"overlooking\":\"Garden/Park\",\"Ownership\":\"Freehold\"}"
```

**Response:**

```json
{
  "predicted_price": 6637645.833333333
}
```

### Interactive API Documentation

The API also provides interactive Swagger documentation:

http://localhost:8000/docs

## 🧪 Testing

```bash
cd backend
pytest
```

**Result:**

```text
2 passed
```

## 🖥️ Screenshots

### House Price Prediction Form

![House Price Prediction Form](docs/screenshots/house-price-form.png)

### Prediction Result

![Prediction Result](docs/screenshots/house-price-result.png)

## 👩‍💻 Author

**Hager Waheed**

House Price Prediction — End-to-End Machine Learning Web Application