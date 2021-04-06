import React from 'react';
import './SearchBar.css';
import ReactDOM from 'react-dom';
import SearchResults from './SearchResults';
import Hero from './Hero';
import FrontCarousel from './FrontCarousel';
import Api from './Api';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {searchTerm: '', searchResults: []};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(){
        Api.search(this.state.searchTerm).then(searchResults => {
            console.log(searchResults);
            this.setState({searchResults: searchResults});
            ReactDOM.render(<SearchResults searchResults = {this.state.searchResults}/>, document.getElementById("Main"));
        })
    }

    handleTermChange(event){
        this.setState({searchTerm: event.target.value});
        ReactDOM.render(<SearchResults />, document.getElementById("Main"));
        if(event.target.value ===""){
            ReactDOM.render(
            <div>
            <Hero /> 
            <FrontCarousel />
            </div>
            , document.getElementById("Main"));
        }
    }

    render(){
        return(
            <form className="SearchBar" onSubmit={this.search}>
                <input placeholder="Titles, people, genres" onChange={this.handleTermChange}></input>
                
            </form>
        )
    }

}

export default SearchBar;