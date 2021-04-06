import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';

class Navbar extends React.Component{
  
  constructor(props){
      super(props);
    }

    render(){
      return(
        <div className="Navbar">  
          
          <nav>
          <a className="logo">Netflix</a>
            <ul className="NavMenu">
              <li><a href="#home">Home</a></li> 
              <li><a href="#tvshows">TV Shows</a></li> 
              <li><a href="#movies">Movies</a></li>
              <li><a href="#new">New and Popular</a></li>
              <li><a href="#mylist">My List</a></li>
            </ul>
            <SearchBar onSearch={this.props.onSearch}/>
            <div className="dropdown">
              <button className="dropbtn">
                <div className="dropdown-content">
                  <a href="#" id="profile-one">Manage Profiles</a>
         
                  <hr className="menu-div"></hr>
                 
                  <a class="profile-options" id="profile-two" href="#">Account</a>
                  <a class="profile-options" href="#">Help Center</a>
                  <a class="profile-options" href="#">Sign out of Netflix</a> 
                </div>
              </button>
            </div>
          </nav>  
        </div>
        )
    }
}

export default Navbar;