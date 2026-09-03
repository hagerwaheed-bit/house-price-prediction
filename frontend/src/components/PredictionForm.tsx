import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { predictHousePrice } from "../api/predictionClient";
import type { PredictionRequest } from "../types/prediction";
import locations from "../locations.json";

function PredictionForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PredictionRequest>({
    carpet_area_clean: 1200,
    floor_clean: 5,
    bathroom_clean: 2,
    balcony_clean: 2,
    parking_clean: 1,
    location_clean: "Mumbai",
    society_clean: "other",
    Status: "Ready to Move",
    Transaction: "Resale",
    Furnishing: "Semi-Furnished",
    facing: "East",
    overlooking: "Garden/Park",
    Ownership: "Freehold",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: [
        "carpet_area_clean",
        "floor_clean",
        "bathroom_clean",
        "balcony_clean",
        "parking_clean",
      ].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.carpet_area_clean <= 0) {
      setError("Carpet area must be greater than 0.");
      return;
    }

    if (
      formData.floor_clean < 0 ||
      formData.bathroom_clean < 0 ||
      formData.balcony_clean < 0 ||
      formData.parking_clean < 0
    ) {
      setError("Numeric values cannot be negative.");
      return;
    }

    setLoading(true);

    try {
      const result = await predictHousePrice(formData);

      navigate("/result", {
        state: {
          predicted_price: result.predicted_price,
        },
      });
    } catch {
      setError(
        "Could not connect to the prediction server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="prediction-form">
      <div className="input-group">
        <label>Carpet Area (sqft)</label>
        <input
          type="number"
          name="carpet_area_clean"
          value={formData.carpet_area_clean}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      <div className="input-group">
        <label>Floor</label>
        <input
          type="number"
          name="floor_clean"
          value={formData.floor_clean}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="input-group">
        <label>Bathrooms</label>
        <input
          type="number"
          name="bathroom_clean"
          value={formData.bathroom_clean}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="input-group">
        <label>Balconies</label>
        <input
          type="number"
          name="balcony_clean"
          value={formData.balcony_clean}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="input-group">
        <label>Parking Spaces</label>
        <input
          type="number"
          name="parking_clean"
          value={formData.parking_clean}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="input-group">
        <label>Location</label>
        <select
          name="location_clean"
          value={formData.location_clean}
          onChange={handleChange}
          required
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Society</label>
        <input
          type="text"
          name="society_clean"
          value={formData.society_clean}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <label>Status</label>
        <select
          name="Status"
          value={formData.Status}
          onChange={handleChange}
          required
        >
          <option value="Ready to Move">Ready to Move</option>
          <option value="Under Construction">Under Construction</option>
        </select>
      </div>

      <div className="input-group">
        <label>Transaction</label>
        <select
          name="Transaction"
          value={formData.Transaction}
          onChange={handleChange}
          required
        >
          <option value="Resale">Resale</option>
          <option value="New Property">New Property</option>
        </select>
      </div>

      <div className="input-group">
        <label>Furnishing</label>
        <select
          name="Furnishing"
          value={formData.Furnishing}
          onChange={handleChange}
          required
        >
          <option value="Furnished">Furnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>

      <div className="input-group">
        <label>Facing</label>
        <select
          name="facing"
          value={formData.facing}
          onChange={handleChange}
          required
        >
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
        </select>
      </div>

      <div className="input-group">
        <label>Overlooking</label>
        <input
          type="text"
          name="overlooking"
          value={formData.overlooking}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <label>Ownership</label>
        <input
          type="text"
          name="Ownership"
          value={formData.Ownership}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Predicting..." : "Predict House Price"}
      </button>
    </form>
  );
}

export default PredictionForm;