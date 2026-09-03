# 🏠 House Price Prediction

An end-to-end Machine Learning web application that predicts house prices based on different property features.

## 📌 Project Overview

The project takes house information such as area, location, floor, bathrooms, balconies, parking, furnishing, and ownership, then uses a trained Machine Learning model to estimate the house price.

The project covers the complete Machine Learning workflow from data preprocessing and model training to API deployment and a web interface.

## ✨ Main Features

- Data Cleaning & Preprocessing
- Exploratory Data Analysis (EDA)
- Feature Engineering
- Outlier Handling
- Machine Learning Model Training
- Model Evaluation & Comparison
- FastAPI REST API
- React + TypeScript Frontend
- Input Validation
- Automated Testing with Pytest
- Docker Support

## 🤖 Machine Learning Models

Three regression models were trained and compared:

| Model | MAE | RMSE | R² |
|---|---:|---:|---:|
| Linear Regression | 4,669,151 | 11,685,106 | 0.478 |
| Random Forest | 2,952,078 | 9,864,650 | **0.628** |
| Gradient Boosting | 3,444,507 | 10,054,794 | 0.613 |

### 🏆 Best Model

**Random Forest Regressor** achieved the best overall performance and was selected as the final prediction model.

## 🛠️ Technologies

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- Seaborn
- Joblib

### Backend
- FastAPI
- Pydantic
- Uvicorn
- Pytest

### Frontend
- React
- TypeScript
- Vite
- React Router
- CSS

### Tools
- Jupyter Notebook
- Git & GitHub
- Docker

## 📁 Project Structure

house-price-project/
│
├── data/
│   └── house_prices.csv
│
├── notebook/
│   └── house_price_prediction.ipynb
│
├── backend/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   │       └── prediction.py
│   │   │
│   │   ├── core/
│   │   │   └── config.py
│   │   │
│   │   ├── schemas/
│   │   │   └── prediction.py
│   │   │
│   │   ├── services/
│   │   │   ├── preprocessing.py
│   │   │   └── inference.py
│   │   │
│   │   ├── utils/
│   │   │   └── logging_config.py
│   │   │
│   │   └── main.py
│   │
│   ├── models/
│   │   ├── house_price.pkl
│   │   └── locations.json
│   │
│   ├── tests/
│   │   └── test_prediction.py
│   │
│   ├── requirements.txt
│   ├── .env.example
│   └── Dockerfile
│
├── frontend/
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── predictionClient.ts
│   │   │
│   │   ├── components/
│   │   │   └── PredictionForm.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── ResultPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   │
│   │   ├── types/
│   │   │   └── prediction.ts
│   │   │
│   │   ├── locations.json
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md


🔄 System Workflow
House Data
    ↓
Data Cleaning
    ↓
Feature Engineering
    ↓
Model Training
    ↓
Random Forest Model
    ↓
FastAPI Backend
    ↓
React Frontend
    ↓
Predicted House Price

🚀 How to Run

Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

Backend:
http://localhost:8000

Swagger Documentation:
http://localhost:8000/docs

Frontend:

cd frontend
npm install
npm run dev

http://localhost:5173

