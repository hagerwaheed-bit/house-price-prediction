import PredictionForm from "../components/PredictionForm";

function HomePage() {
  return (
    <div className="home-page">
      <header className="top-header">
        <div className="brand">
          <div className="brand-icon">🏠</div>

          <div className="brand-info">
            <h1>House Price Prediction</h1>
            <span>BY HAGER WAHEED</span>
          </div>
        </div>

        <div className="header-badge">
          ✨ AI-Powered House Price Estimation
        </div>
      </header>

      <main className="dashboard">
        <section className="form-card">
          <div className="section-header">
            <div className="section-icon">🏡</div>

            <div>
              <h2>Enter House Details</h2>
              <p>
                Fill in the information below to get an estimated price.
              </p>
            </div>
          </div>

          <PredictionForm />
        </section>

        <aside className="info-card">
          <div className="house-visual">
            <div className="house-icon">🏡</div>
          </div>

          <h2>Why Use Our Predictor?</h2>

          <div className="feature">
            <div className="feature-icon">🤖</div>

            <div>
              <h3>AI Powered</h3>
              <p>
                Our machine learning model analyzes multiple house features
                to estimate the price.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">🛡️</div>

            <div>
              <h3>Accurate & Reliable</h3>
              <p>
                The model was trained on real house price data to provide
                reliable predictions.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">⚡</div>

            <div>
              <h3>Instant Results</h3>
              <p>
                Get your estimated house price in seconds with just a few
                clicks.
              </p>
            </div>
          </div>

          <div className="secure-box">
            🔒 Your prediction is processed securely.
          </div>
        </aside>
      </main>
    </div>
  );
}

export default HomePage;