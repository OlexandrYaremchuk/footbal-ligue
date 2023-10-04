import react, { useEffect, useState } from "react";
import axios from "axios";

const League = () => {
  const [error, setError] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [league, setLeague] = useState([]);

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
    headers: {
      "X-RapidAPI-Key": "082c350bedmsh30bd8702b6f2bdcp1b9a16jsnf7a143799076",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios(options).then(
      (data) => {
        setIsLoader(true);
        setLeague(data.data.response);
        // console.log(data.data.response)
      },
      (error) => {
        setIsLoader(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>ERROR: {error.message}</div>;
  } else if (!isLoader) {
    return <div>Завантаження ...</div>;
  } else {
    return league.map((l) => {
      return (
        <div>
          <img src={l.league.logo} />
          <ul>
            <li>
              <h1>{l.league.name}</h1>
            </li>
            <li>
              <p>{l.country.name}</p>
            </li>
            <li>
              <img src={l.country.flag} />
            </li>
          </ul>
        </div>
      );
    });
  }
};

export default League;
