import React from 'react';


function getDisplayName(WrappedComponent) {
  return 'Component';
}

export const  WithSubscription = (WrappedComponent) => {
  class NewComponent extends React.Component{

    render(){
        return <WrappedComponent displayName={`WithSubscription -${getDisplayName(WrappedComponent)}`} />
    }
}
return NewComponent;


}

export default WithSubscription 
  
 