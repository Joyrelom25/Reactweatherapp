import React from 'react'

class Weather extends React.Component {
    render() {

        return(
         <div className = "weather__info"> 
            {this.props.city && this.props.country &&  <p className= "weather__key"> {this.props.city} {this.props.country} </p> }
            {this.props.icon && <i className={this.props.icon} style={{color: 'white', fontSize: '28px'}}></i>}
            {this.props.temperature &&  <p className= "weather__key"> Temperature : {Math.round(this.props.temperature)}&deg; </p> }
            {this.props.description &&  <p className= "weather__key">  Description : {this.props.description} </p> }
            {this.props.tempmax && <p className= "weather__key"> Temp max : {Math.round(this.props.tempmax)}&deg; </p>}
            {this.props.tempmin && <p className= "weather__key" > Temp min : {Math.round(this.props.tempmin)}&deg; </p>}
            {this.props.datetime && <p className= "weather__key">  Date / time : {this.props.datetime}</p>}
            {this.props.error && <p className= "weather__error">{this.props.error}</p>}
        </div>       
        );
    }
}

export default Weather;