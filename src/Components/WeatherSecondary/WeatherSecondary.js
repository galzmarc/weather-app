
function WeatherSecondary(props) {

  const data = props.weather.main;
  const windSpeed = props.weather.wind.speed;
  const sunrise = props.weather.sys.sunrise;
  const sunset = props.weather.sys.sunset;


  return (
    <div className="weather-secondary">
      <table>
				<tbody>
					<tr>
						<td>Feels like: </td>
						<td>{Math.round(data.feels_like)}°C</td>
					</tr>
					<tr>
						<td>Humidity: </td>
						<td>{data.humidity}%</td>
					</tr>
					<tr>
						<td>Wind speed: </td>
						<td>{Math.round(windSpeed * 3.6)} km/h</td>
					</tr>
					<tr>
						<td>Pressure: </td>
						<td>{data.pressure} hPA</td>
					</tr>
					<tr>
						<td>Sunrise: </td>
						<td>{new Date(sunrise * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</td>
					</tr>
					<tr>
						<td>Sunset: </td>
						<td>{new Date(sunset * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</td>
					</tr>
				</tbody>
			</table>
    </div>
  )
}

export default WeatherSecondary;