import React from 'react'
import WeeklyDetail from './WeeklyDetail'

export default class FiveDayWeather extends React.Component {
    render() {
        const card = this.props.data.map((i) => {
            return <WeeklyDetail info={i}
                city={this.props.city}
            />
        })
        return (
            <div className="row justify-content-center">
                {card}
            </div>
        )
    }
}