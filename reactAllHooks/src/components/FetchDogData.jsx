import React, { useEffect, useState } from "react";

function FetchDogData() {
  const [dogImage, setImage] = useState(null);

  const fetchDogImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImage(data.message));
  };

  useEffect(() => {
    fetchDogImg();
  }, []);
  return (
    <div>
      <img
        src={dogImage}
        alt="Random Dog"
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />

      <button onClick={fetchDogImg}>Change Image</button>
    </div>
  );
}

export default FetchDogData;
