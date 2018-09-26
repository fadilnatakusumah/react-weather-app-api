import React from 'react';

// class Form extends React.Component{
//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.props.getWeather}>
//                     <input type="text" name="city" placeholder="Your City"></input>
//                     <input type="text" name="country" placeholder="Your Country"></input>
//                     <button>Get weather</button>
//                 </form>
//             </div>
//         );
//     }
// }

// Or do it like this
const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input required type="text" name="city" placeholder="Your City"></input>
                <input required type="text" name="country" placeholder="Your Country"></input>
                <button>Get weather</button>
            </form>
        </div>
    )
}


export default Form;