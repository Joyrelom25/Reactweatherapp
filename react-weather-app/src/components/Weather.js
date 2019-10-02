import React from 'react'

class Weather extends React.Component {
    render() {
        return(
         <div className = "weather__info"> 
            {this.props.city && this.props.country &&  <p className= "weather__key"> Location : {this.props.city} {this.props.country} </p> }
            {this.props.icon && <i className= "weather__key">WeatherIcon : {this.props.icon}</i>}
            {this.props.temperature &&  <p className= "weather__key"> Temperature : {this.props.temperature}</p> }
            {this.props.humidity && <p className= "weather__key"> Humidity : {this.props.humidity} </p> }
            {this.props.description &&  <p className= "weather__key">  Description : {this.props.description} </p> }
            {this.props.tempmax && <p className= "weather__key"> Temp max : {this.props.tempmax}</p>}
            {this.props.tempmin && <p className= "weather__key" > Temp min : {this.props.tempmin}</p>}
            {this.props.datetime && <p className= "weather__key">  Date / time : {this.props.datetime}</p>}
            {this.props.error && <p className= "weather__error">{this.props.error}</p>}
        </div>       
        );
    }
}

export default Weather;