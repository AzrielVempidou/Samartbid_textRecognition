import axios from 'axios';
import { GOOGLE_CLOUD_VISION_API_KEY } from '@env';

export const performOCR = async (uri) => {
  if (!uri) {
    throw new Error('No image URI provided');
  }

  const url = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_CLOUD_VISION_API_KEY}`;

  // Convert image URI to Base64
  const base64Image = await fetch(uri)
    .then(res => res.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }));

  if (!base64Image) {
    throw new Error('Failed to convert image to Base64');
  }

  console.log('Base64 Image:', base64Image); // Log gambar dalam format Base64

  const requestBody = {
    requests: [
      {
        image: {
          content: base64Image.split(',')[1],
        },
        features: [
          {
            type: 'TEXT_DETECTION',
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Google Vision API Response:', response.data); // Log respons dari Google Vision API
    return response.data.responses[0].fullTextAnnotation.text;
  } catch (error) {
    console.error('OCR error:', error);
    throw new Error('Failed to recognize text.');
  }
};

