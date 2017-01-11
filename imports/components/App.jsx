import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Lists } from '../api/lists.js';

import List from './List.jsx';

class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            numchildren: 0,
            listTitles: []
        };
        
        this.submitForm = this.submitForm.bind(this);
        
    }
    submitForm(e){
        e.preventDefault();
        
        const text = "this is some text";
        
        console.log("submitting form ...")
    }
    renderLists(){
        return this.props.lists.map((list)=>{
            <List/>
        })
    }
    render(){
        
        return(
            <div>
                <h1>Hello App</h1>
                <form onSubmit={this.submitForm}>
                <button>Add List</button>
                </form>
                
                <List title="Test List"/>
                
            </div>
        )
    }
}

App.propTypes = {
  lists: PropTypes.array.isRequired,  
};

export default createContainer(() => {
    return{
        lists: Lists.find({}).fetch(),
    };
}, App);