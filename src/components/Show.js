import React from 'react';
import './Show.css';

class Show extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Show">
                <div className="Show-Information">
                    <h3>Show Name  <button className="ShowButton">+</button></h3>
                    <p> Release Date | Seasons </p>
                </div>
            </div>
        )
    }
}

export default Show;
