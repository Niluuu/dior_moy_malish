import React, { useEffect, useState } from "react";
import img1 from "./assets/img1.jpg";
import moment from "moment";
import music1 from "./assets/mp3-1.mp3";
import LazyLoad from "./components/slider";

function App() {
  const [date, setdate] = useState("");

  useEffect(() => {
    const curent = new Date().toISOString().slice(0, 10);
    const start = moment("2020-05-08");
    const day = moment(curent).diff(start, "days");
    const month = moment(curent).diff(start, "months");

    setdate(`${month} oy - ${day} kun`);
  });

  return (
    <div className="section" style={{ background: `url(${img1})` }}>
      <div className="player">
        <embed height="100" src={music1} autostart="true" loop="true"></embed>
      </div>
      <div className="date_row">
        <h1 style={{ marginTop: 0 }}>Bobaloqim</h1>
        <h1>{date} qoldi!</h1>
      </div>
      <LazyLoad />
    </div>
  );
}

export default App;
