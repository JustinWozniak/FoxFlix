import React, { useState, useEffect } from 'react';


function Footer() {

  let [returnedData, setReturnedData] = useState("");
  const chuckNorrisJoke = "http://api.icndb.com/jokes/random"
  const fetchData = async () => {
    try {
      const response = await fetch(chuckNorrisJoke);
      const data = await response.json();
      returnedData = data.value.joke
      console.log(returnedData)
      console.log(data.value.joke)
      return returnedData;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData()
      .then(setReturnedData)
      .catch(error => {
        console.warn(JSON.stringify(error, null, 2));
      });
  }, []);

  return (
    <div className="norrisJoke">
      <h4>"{returnedData}"</h4>
      <br />
      <h6>From the Brain of Justin Wozniak 2020</h6>
    </div>
  )

}
export default Footer;