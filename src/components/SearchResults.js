import React from 'react';
import './SearchResults.css';
import Carousel from './Carousel';

class SearchResults extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="SearchResults">
                <h2 className="ResultsLabel"></h2>
                <div className="Shows"/>
                    <Carousel searchResults = {this.props.searchResults}
                              />
                <div/>
            </div>
        );
    }
}

export default SearchResults;