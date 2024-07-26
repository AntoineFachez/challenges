import React, { useState, useEffect } from 'react';

function CityImage({ cityName }) {
  const [imageUrl, setImageUrl] = useState(null);

  async function fetchCityImage(cityName) {
    const accessKey = process.env.REACT_APP_UNSPLASH_API_KEY; // Replace with your access key
    const url = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${accessKey}`;
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const randomImage =
        data.results[Math.floor(Math.random() * data.results.length)];
      return randomImage.urls.regular;
    } catch (error) {
      console.error('Error fetching city image:', error);
      return null; // Or handle the error as needed
    }
  }

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = await fetchCityImage(cityName);
      setImageUrl(imageUrl);
    };

    fetchImage();
  }, [cityName]);

  return <img src={imageUrl} alt={`${cityName} image`} />;
}

export default CityImage;
