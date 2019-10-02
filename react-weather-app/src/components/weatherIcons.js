import React from 'react'
import 'weather-icons/css/weather-icons.css'

class WeatherIcons extends React.Component {
    state = {
        Thunderstorm : "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    }
}

export default WeatherIcons;