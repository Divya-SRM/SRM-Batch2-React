import React from 'react';
export default function DisplayWeather(props){
    console.log(props);
    const { data } = props;
    return (
        <div className="displayweather">
          <h1>  {data.name}</h1>
          <h2>Temperature {"  "}
          {Math.floor(data.temp - 273.15)}
              <sup>o</sup></h2>
          <h2>Sunrise: {new Date(data.sunrise * 1000).toLocaleTimeString()}</h2>
          <h3>Wind{"  "}{Math.floor((data.wind_speed* 18) / 5)} km/hr</h3>
          </div>
    );

}