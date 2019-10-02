import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import WeatherIcons from './components/weatherIcons'

const API_KEY = "39a3cca998a3e422c540f1b85dc5aa22"


class App extends React.Component {

  state = {

 /*   rangeId: undefined,
    icon : undefined, */ 
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    tempmax: undefined,
    tempmin: undefined,
    datetime: undefined,
    error: undefined

  }

 /*  getWeatherIcons(icon, rangeId) {
    switch(true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon: this.WeatherIcons.Thunderstorm})
        break;
        case rangeId >= 300 && rangeId <= 321:
        this.setState({icon: this.WeatherIcons.Drizzle})
        break;
        case rangeId >= 500 && rangeId <= 531:
        this.setState({icon: this.WeatherIcons.Rain})
        break;
        case rangeId >= 600 && rangeId <= 622:
        this.setState({icon: this.WeatherIcons.Snow})
        break;
        case rangeId >= 701 && rangeId <= 781:
        this.setState({icon: this.WeatherIcons.Atmosphere})
        break;
        case rangeId >= 801 && rangeId <= 804:
        this.setState({icon: this.WeatherIcons.Clouds})
        break;
        case rangeId == 800:
        this.setState({icon: this.WeatherIcons.Clear})
        break;
        default: this.setState({icon: this.WeatherIcons.Clear})
    }
  } */

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country ) {
    console.log(data);
      
    this.setState({

 /*     rangeId: data.weather[0].id,
      icon : this.getWeatherIcons , */ 
      temperature: data.main.temp, 
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      tempmax: data.main.temp_max,
      tempmin: data.main.temp_min,
      datetime: data.dt*1000,
      error: ""

    });

    } else {
      this.setState({
 /*     rangeId: undefined,  
        icon : undefined, */
        temperature: undefined, 
        city: undefined,
       country: undefined,
        description: undefined,
       tempmax: undefined,
       tempmin: undefined,
        datetime: undefined,
       error: "Please enter the values"
      })
    }
  }

  render() {
    return(
      <div>
        <div className ="wrapper">
          <div className = "main">
            <div className= "container">
              <div className = "row"> </div>
               <div className = "col-xs-5 title-container">
                  <Titles / >
               </div>
               <div className = "col-xs-7 form-container">
               <Form getWeather={this.getWeather} / >
                  <Weather
                     /* icon = {this.state.icon} */ 
                      temperature={this.state.temperature}
                      city= {this.state.city}
                      country= {this.state.country}
                      description= {this.state.description}
                      tempmax = {this.state.tempmax}
                      tempmin = {this.state.tempmin}
                      datetime = {this.state.datetime}
                      error= {this.state.error} / >
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;