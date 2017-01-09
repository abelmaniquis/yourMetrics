import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import List from './List.jsx';
import BasicCounter from './BasicCounter.jsx';

class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            numchildren: 0
        };
        
    }
    render(){
        return(
            <div>
                <h1>Hello App</h1>
                <button onClick={console.log("Will add a new list of components")}>Add List</button>
                <div className="listContainer">
                    <List/>
                </div>
            </div>
        )
    }
}


export default App;