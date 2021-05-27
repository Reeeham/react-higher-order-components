import React, { PureComponent } from 'react'
import WithCounter from './WithCounter'
import WithSubscription from './WithSubscription';

class ClickCounter extends PureComponent {
    

    render() {
        const {count, incrementCount } = this.props;

        //name injects to original component so we can access it through props
        return (
            <button onClick={incrementCount}>{this.props.name} Clicked { count} times</button>
        )
    }
}

export default WithSubscription(WithCounter(ClickCounter))