import React, { useState } from "react";
import { useEffect } from "react";

import Navigation from "./Navigation";
import Stats from "./Stats";

// https://www.bing.com/covid?ref=vc.ru
// https://covid19.mathdro.id/api

const API = "https://covid19.mathdro.id/api";
const API_COUNTRY = "https://covid19.mathdro.id/api/countries";

const App = () => {
  const [countries, setCountries] = useState([]);

  const [error, setError] = useState("");

  const setData = () => {};

  useEffect(() => {
    fetchData(API);
  }, []);

  const fetchData = async url => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      //setConfirmed(data.confirmed.value);
      //setRecovered(data.recovered.value);
      //setDeaths(data.deaths.value);
      //setLastUpdate(data.lastUpdate);
      setCountries(data.countries);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div>
      <Stats url={} />
      {error && `Error: ${error}`}
      <br />
      <Stats />
    </div>
  );
};

export default App;
