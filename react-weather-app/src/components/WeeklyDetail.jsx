import React from 'react';
import moment from 'moment';
import 'owfont/css/owfont-regular.css';

export default class WeeklyDetail extends React.Component {
  render() {
    let info = this.props.info
    let newDate = new Date();
    const weekday = info.dt * 1000
    newDate.setTime(weekday)
    const imgURL = `owf owf-${info.weather[0].id} owf-5x`
    return (
      <React.Fragment>
        <div className="col-sm-2">
          <div className="card cardStyle">
            {<h2 className= "weather__key">{this.props.city}</h2>}
            <h3 className="card-title" style={{color: 'pink'}}>{moment(newDate).format('dddd')}</h3>
            <p className="text-muted" style={{color: 'green'}}>{moment(newDate).format('MMMM Do, h:mm a')}</p>
            <i className={imgURL} style={{color: 'orange'}}></i>
            <h2 className= "weather__key">{Math.round(info.main.temp - 273.15)}&deg;</h2>
            <h4 className= "weather__key">{Math.round(info.main.temp_min - 273.15)}&deg;</h4>
            <h4 className= "weather__key">{Math.round(info.main.temp_max - 273.15)}&deg;</h4>
            <div>
              <p className="card-text" style={{color: 'pink'}}>{info.weather[0].description}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}