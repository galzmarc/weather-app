import WeatherIcon from "../WeatherIcon/WeatherIcon";

function WeatherPrimary(props) {

  const data = props.weather;
  const icon = data.weather[0].icon;

  return props.weather ? (
    <div className="weather-primary">
      <p>{props.cityName}, {data.sys.country}</p>
      <h1>{Math.round(data?.main?.temp)}°C</h1>
      <WeatherIcon icon={icon} />
      <p>{data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1)}</p>
      <p>Max: {Math.round(data?.main?.temp_max)}° Min: {Math.round(data?.main?.temp_min)}°</p>
    </div>
  ) : <p></p>
}

export default WeatherPrimary;