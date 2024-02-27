"use client"
import React, { useState } from 'react';
import RootLayout from '../layout';
import axios from 'axios'; // Import Axios

const ocr_cpf = () => {
  const [ocrResult, setOCRResult] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!uploadedImage) {
      alert('Please upload an image first.');
      return;
    }
  
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('image', uploadedImage); // Append the uploaded image
  
      // Send image to OCR API using Axios
      const response = await axios.post('YOUR_OCR_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type to multipart form-data
        }
      });
  
      // Assuming OCR API returns result in response.data.ocrResult
      setOCRResult(response.data.ocrResult);
    } catch (error) {
      console.error('Error predicting:', error);
      // Handle error here
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#000' }}>Upload Your Photo</h2>
        <div style={{ border: '2px dashed #2ecc71', borderRadius: '10px', padding: '20px', marginBottom: '20px', textAlign: 'center' }}>
          <input type="file" id="uploadPhoto" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
          <label htmlFor="uploadPhoto" style={{ cursor: 'pointer' }}>
            {uploadedImage ? (
              <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px', marginBottom: '10px' }} />
            ) : (
              <div>
                <span style={{ fontSize: '48px', color: '#2ecc71', display: 'block', marginBottom: '10px' }}>+</span>
                <p style={{ fontSize: '18px', color: '#000', margin: 0 }}>Click to upload</p>
              </div>
            )}
          </label>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={handlePredict} style={{ background: '#2ecc71', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>Predict</button>
          <h2 style={{ marginBottom: '20px', color: '#000' }}>OCR Result</h2>
          <input type="text" id="ocrResult" value={ocrResult} readOnly style={{ width: '300px', padding: '10px', borderRadius: '5px', border: '2px solid #2ecc71', marginBottom: '20px', background: '#fff', color: '#000' }} />
        </div>
      </div>
    </div>
  );
};

export default ocr_cpf;
