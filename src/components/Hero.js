import React from 'react';
import './Hero.css';

class Hero extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="hero-wrapper">
                <img id="caption" src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeOuRGDwZOsdweIrg7Lt1vYDaxqLYsrVb3NUcA8uFffJXEMQCbZmIUirkruF7bn40OZRjLsKyxWN7Mkfz4YFIvstKxl02N1jQrZEdZ4ESHgA70Bhzg7vVZU4aHa3NKL_KFu9PxZo7akTiOQF3-h-sOjxpruVG7qcp7Tp2DRZibRIkQ.webp?r=6ff"/>
                <img id="hero-img" src="https://occ-0-4734-1360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfMn7iecpDQ9Kbj3cQB5xC9kHBkzLZhyQ4Bx3YhoJFhvkPkxBYQs-9ee4xHx3yZPoqFwHcwaPsLkzyc6kNvVqE0smcJN.webp?r=360" alt="Hero"/>
                    
            </div>
        )
        }
}

export default Hero;
