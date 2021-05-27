import React, { PureComponent } from 'react'
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

/**
 * higher order component is a function that takes a component and 
 * @returns a new component
 * whereas a component transforms props into UI, a higher-order component transforms 
 * a component into another component
 * HOCs are common in third-party React libraries,
 *  such as Redux’s connect and Relay’s createFragmentContainer.
 */

// withSubscription is a higher order component takes the component input or props
// and return new component with new props
 
/*const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);

function withSubscription(WrappedComponent, selectData) {
   @returns another component 
   return class extends PureComponent {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);

      this.state = {
        data: selectData(DataSource, props)
      };

    }
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({data : selectData(DataSource,this.props)})
    }

    render() {
      return (
        <WrappedComponent data={this.state.data} {...this.props}/>
      );
    }
  }
}
*/



function App() {
  return (
    <div className="App"> 
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
