import React, { useState } from "react";

const App = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an image file");
      return;
    }
    setLoading(true);
    setError(null);
    setPrediction(null);
    
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setPrediction(data);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to fetch prediction");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">WBC Classification</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Predicting..." : "Upload & Predict"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {prediction && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <p className="text-lg">Predicted Class: <strong>{prediction.class}</strong></p>
          <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
