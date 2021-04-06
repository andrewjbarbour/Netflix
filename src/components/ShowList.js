import React from 'react';
import './ShowList.css';
import Show from './Show';

class ShowList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="ShowList">
                <Show />
                <Show />
                <Show />
                <Show />
                <Show />
            </div>
        )
    }
}

export default ShowList;