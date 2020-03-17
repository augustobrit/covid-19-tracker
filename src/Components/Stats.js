import React, { useState } from "react";
import { useEffect } from "react";

const Stats = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [active, setActive] = useState(0);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [coords, setCoords] = useState({});
  const [lastUpdate, setLastUpdate] = useState("");

  return (
    <div>
      <p>Confirmed: {confirmed}</p>
      <p>Recovered: {recovered}</p>
      <p>Deaths: {deaths}</p>
      <p>Last Update: {lastUpdate}</p>
    </div>
  );
};

export default Stats;
