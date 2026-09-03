import { Link, useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();

  const predictedPrice = location.state?.predicted_price;

  if (predictedPrice === undefined) {
    return (
      <div className="page result-page">
        <h1>No Prediction Found</h1>

        <p>Please enter the house details first.</p>

        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="page result-page">
      <h1>🏠 Prediction Result</h1>

      <p className="result-label">Estimated House Price</p>

      <div className="price">
        ₹ {Number(predictedPrice).toLocaleString("en-IN")}
      </div>

      <Link to="/" className="back-button">
        Predict Another House
      </Link>
    </div>
  );
}

export default ResultPage;