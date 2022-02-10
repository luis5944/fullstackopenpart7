import React, { useState, useEffect } from "react";
import axios from "axios";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((data) => setCountry(data.data));
  }, [name]);

  if (name === "") {
    return null;
  }

  if (!country) {
    return [];
  }
  return country;
};

const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (country.length === 0) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country[0].data.name} </h3>
      <div>capital {country[0].data.capital} </div>
      <div>population {country[0].data.population}</div>
      <img
        src={country[0].data.flag}
        height="100"
        alt={`flag of ${country[0].data.name}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);
  console.log(country);
  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>
      <Country country={country} />
    </div>
  );
};

export default App;
