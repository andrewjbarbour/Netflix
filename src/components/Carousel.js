import React from 'react';
import './Carousel.css';
import loadingImage from './loadingimage.jpg';

class Carousel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <p className="row-header-title"></p>
            <div className="wrapper">
            
                <section id="section1">
                    
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[0].Poster : loadingImage} />
                    </div>
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[1].Poster : loadingImage} />    
                    </div>
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[2].Poster : loadingImage} />    
                    </div>
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[3].Poster : loadingImage} />    
                    </div>
                    
                </section>
                
            </div>

            <p className="row-header-title"></p>
            <div className="wrapper">
            
                <section id="section1">
                   
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[4].Poster : loadingImage} />
                    </div>
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[5].Poster : loadingImage} />    
                    </div>
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[6].Poster : loadingImage} />    
                    </div>
                    <div className="item">
                        <img src={this.props.searchResults ? this.props.searchResults[7].Poster : loadingImage} />    
                    </div>
                   
                </section>
                
               
            </div>

            </div>

            
        )
    }
}

export default Carousel;
