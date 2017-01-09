import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

class BasicCounter extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            count: this.props.startNum
        }
    }
    onChangeCount(change){
        this.setState({
           count: this.state.count + change 
        });
    }
    render(){
        return(
            <div className="buttonContainer">
                <h2>{this.props.text}</h2>
                <p>{this.state.count}</p>
                <button onClick={ this.onChangeCount.bind(this,1) }>+</button>
                <button onClick={ this.onChangeCount.bind(this,-1) }>-</button>
            </div>
        )
    }
    
}

export default BasicCounter;