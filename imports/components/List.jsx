import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import BasicCounter from './BasicCounter.jsx';

class List extends Component{
    render(){
        
        console.log(this.props.title);
        
    return(
        <div className = "listContainer">
            <h1>{this.props.title}</h1>
            <BasicCounter text={"Current Weight"} startNum={150} />
            <BasicCounter text={"Basic Counter 2"} startNum={17} />
        </div>
    )
    }
}

export default List;