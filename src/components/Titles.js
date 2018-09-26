import React from 'react';

// class Titles extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>Weather Finder</h1>
//                 <p>Find weather condition from your home</p>
//             </div>
//         )
//     }
// }

// Or do it like this

const Titles = (props) =>{
    return (
        <div>
            <h1>Weather Condition with <b>React</b></h1>
            <p>Find weather condition from your home</p>
            <hr></hr>
        </div>
    );
}


export default Titles;