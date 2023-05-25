import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [showNGO, setShowNGO] = useState(true);
  const img1 =
    "https://villahurmuses.com/wp-content/uploads/2016/01/Emfasis-Logo-high-res-ENG.jpg";
  const img2 =
    "https://s28151.pcdn.co/wintersession/wp-content/uploads/sites/245/2021/01/monday-huddle.jpg";
  const img3 =
    "https://villahurmuses.com/wp-content/uploads/2016/01/christmas-7.jpg";
  const img4 =
    "https://villahurmuses.com/wp-content/uploads/2016/02/christmas-2-1024x700-min-1024x700.jpg";
  const img5 =
    "https://www.shelterwa.org.au/wp-content/uploads/2021/01/zoe-vandewater-DXPS-nc32nM-unsplash-1030x686.jpg";
  const img6 =
    "https://unitedwaymassbay.org/wp-content/uploads/2020/01/matt-collamer-8UG90AYPDW4-unsplash.jpg";

  function handleNGO() {
    setShowNGO(!showNGO);
  }

  return (
    <div className="App">
      <Header />
      <Main />

      <h1>INTERNATIONAL NGO</h1>
      <p>
        Welcome to our platform, bridging NGOs globally for shared projects,
        ideas, and meaningful dialogue. Join us in driving positive change and
        amplifying social impact through collaboration and collective action
      </p>
      <button>Join here</button>
      <div className="img-wrap">
        <img src={img1} alt="yes alt" />
        <img src={img2} alt="yes alt" />
        <img src={img3} alt="yes alt" />
        <img src={img4} alt="yes alt" />
        <img src={img5} alt="yes alt" />
        <img src={img6} alt="yes alt" />
      </div>
      {showNGO && <p>you are now part of the solution </p>}
    </div>
  );
}

export default App;
