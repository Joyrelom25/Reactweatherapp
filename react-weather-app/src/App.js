import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "39a3cca998a3e422c540f1b85dc5aa22"


class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch();
    const data = await api_call.json();

    console.log(data);

  }

  render() {
    return(
      <div>
        <Titles / >
        <Form getWeather={this.getWeather} / >
        <Weather / >
      </div>
    );
  }

}

export default App;