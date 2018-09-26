import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const api_key_weather = "d90a77bd32dec835cbfd65e94841416e";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key_weather}`);
        const data = await api_call.json();
        console.log(data);
        if(city && country){
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        }else{
            this.setState({
                error: "Please fill the City field and Country field"
            })
        }
        
    }
    
    render(){
        return (

            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 title-container">
                                <Titles></Titles>
                            </div>
                            <div className="col-lg-7 weather-container">
                                <Form getWeather={this.getWeather}></Form>
                                <Weather className="pt-5" temperature={this.state.temperature}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                description={this.state.description}
                                error={this.state.error}
                                ></Weather>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            // <div class="body">
            //     <div class='wrapper'>
            //         <div class="content">
            //                 <Titles></Titles>
            //             <div class="left">
            //                 <Form getWeather={this.getWeather}></Form>
            //             </div>
            //             <div class="right">
            //                 <div>
            //                     <Weather temperature={this.state.temperature}
            //                     city={this.state.city}
            //                     country={this.state.country}
            //                     humidity={this.state.humidity}
            //                     description={this.state.description}
            //                     error={this.state.error}
            //                     ></Weather>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default App;