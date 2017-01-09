import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import BasicCounter from './BasicCounter.jsx';

const List = () => {
    return(
        <div className = "listContainer">
            <p>Component</p>
            <BasicCounter text={"Current Weight"} startNum={150} />
            <BasicCounter text={"Basic Counter 2"} startNum={17} />
        </div>
    )
}

export default List;