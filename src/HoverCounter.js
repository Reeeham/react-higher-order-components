import React, { PureComponent } from 'react'
import WithCounter from './WithCounter'
import WithSubscription from './WithSubscription';

class HoverCounter extends PureComponent {
   
    render() {
        const {count, incrementCount } = this.props;

        return (
            <div>
                <h2 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</h2>
            </div>
        )
    }
}

export default WithSubscription(WithCounter(HoverCounter))