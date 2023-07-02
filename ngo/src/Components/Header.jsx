import React, { useState, useEffect } from "react";
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";

export default function Header() {
  const [signedUp, setSignedUp] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Perform data collection or API calls here
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const fetchData = () => {
    // Simulated async data fetching
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Some data collected on page load";
        resolve(data);
      }, 1000);
    });
  };

  const handleNavigate = () => {
    setSignedUp(true);
  };

  if (signedUp) {
    // Render the signed-up page here
    return (
      <div>
        <h1>Signed Up Page</h1>
        <p>Welcome to the signed-up page!</p>
        {data && <p>Data: {data}</p>}
      </div>
    );
  }

  return (
    <header>
      <h1>Xbetter</h1>
      <p>
        Welcome to our platform, bridging NGOs globally for shared projects,
        ideas, and meaningful dialogue. Join us in driving positive change and
        amplifying social impact through collaboration and collective action.
      </p>
      <div className="image-container">
        <img src={image1} alt="Example 1" />
        <img src={image2} alt="Example 2" />
        <img src={image3} alt="Example 3" />
      </div>
      <button onClick={handleNavigate}>Go to Signed Up Page</button>
      {data && <p>Data: {data}</p>}
    </header>
  );
}
