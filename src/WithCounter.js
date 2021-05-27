
import React from 'react';
import { WithSubscription } from './WithSubscription';

const WithCounter = WrappedComponent =>{

    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
    
            this.state = {
                count : 0
            }
        }
        incrementCount = () =>{
            this.setState(state => ({count : state.count +1}))
        }
        render(){
            return(
            <>
            <h1>{this.props.displayName}</h1>
            <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
            </>) 
        }
    }
    return NewComponent;
}

export default WithCounter;