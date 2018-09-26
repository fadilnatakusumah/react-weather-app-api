import React from 'react';


// class Weather extends React.Component{
//     render(){
//         return (
//           <div>
//               {this.props.city && this.props.country && <p>Your City, {this.props.city}, {this.props.country}</p>}
//               {this.props.humidity && <p>Humidity: {this.props.humidity} </p> }
//               {this.props.description && <p>The Weather is {this.props.description} </p> }
//               {this.props.temperature && <p>The Temperature is {this.props.temperature} </p> } 
//               {this.props.error && <p><b>There's an error: </b>{this.props.error} </p> } 
//           </div>
//           );
//     }
// }

// Or using like this

const Weather = (props) => {
    return (
        <div>
            <hr></hr>
            {props.city && props.country && <div><p>Your City, {props.city}, {props.country}</p></div>}
            {props.humidity && <p>Humidity: {props.humidity} </p> }
            {props.description && <p>The Weather is {props.description} </p> }
            {props.temperature && <p>The Temperature is {props.temperature} </p> } 
            {props.error && <p><b>There's an error: </b>{props.error} </p> } 
    </div>
    );
}


export default Weather;